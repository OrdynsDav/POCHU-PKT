"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Section.module.css"

export function Section({
  children,
  id,
  className,
  fallback,
  fallbackClassName,
}: {
  children: ReactNode;
  id: string;
  className?: string;
  fallback?: ReactNode;
  fallbackClassName?: string;
}) {
  const placeholderRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mountNow = () => setIsMounted(true);

    if (window.location.hash) {
      setIsMounted(true);
    }

    window.addEventListener("force-mount-sections", mountNow);
    window.addEventListener("hashchange", mountNow);

    return () => {
      window.removeEventListener("force-mount-sections", mountNow);
      window.removeEventListener("hashchange", mountNow);
    };
  }, []);

  useEffect(() => {
    if (isMounted) return;

    const placeholder = placeholderRef.current;
    if (!placeholder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    observer.observe(placeholder);
    return () => observer.disconnect();
  }, [isMounted]);

  const sectionClassName = [styles.section, className, !isMounted ? fallbackClassName : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      ref={placeholderRef}
      id={id}
      className={sectionClassName}
      aria-busy={!isMounted}
    >
      {isMounted ? children : fallback}
    </section>
  );
}

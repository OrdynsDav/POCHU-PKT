"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  const placeholderRef = useRef<HTMLDivElement | null>(null);
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

  const sectionClassName = ["scroll-mt-[120px]", className]
    .filter(Boolean)
    .join(" ");

  if (!isMounted) {
    return <div ref={placeholderRef} id={id} className={sectionClassName} />;
  }

  return (
    <section id={id} className={sectionClassName}>
      {children}
    </section>
  );
}

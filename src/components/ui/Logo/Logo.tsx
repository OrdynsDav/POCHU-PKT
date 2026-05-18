"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useState } from "react";
import styles from "./Logo.module.css";

const LOGO_SRC = "https://pskovpkt.ru/images/logo/logo_PKT.png";

interface LogoProps {
  href: string;
  className?: string;
  priority?: boolean;
}

function LogoInner({ href, className, priority = false }: LogoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      className={[styles.link, className].filter(Boolean).join(" ")}
      href={href}
    >
      <span className={styles.figure}>
        <span
          className={[
            styles.placeholder,
            loaded ? styles.placeholderHidden : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        />
        <Image
          src={LOGO_SRC}
          alt="Псковский Кооперативный Техникум"
          width={200}
          height={200}
          sizes="5rem"
          priority={priority}
          className={[styles.image, loaded ? styles.imageVisible : ""]
            .filter(Boolean)
            .join(" ")}
          onLoad={() => setLoaded(true)}
        />
      </span>
    </Link>
  );
}

export const Logo = memo(LogoInner);

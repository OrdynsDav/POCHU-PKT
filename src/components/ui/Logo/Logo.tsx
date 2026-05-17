import Link from "next/link";
import { memo } from "react";
import styles from "./Logo.module.css";
import Image from "next/image";

interface LogoProps {
  href: string;
  className?: string;
}

function LogoInner({ href, className }: LogoProps) {
  return (
    <Link
      className={[styles.link, className].filter(Boolean).join(" ")}
      href={href}
    >
      <Image
        src="https://pskovpkt.ru/images/logo/logo_PKT.png"
        alt="Псковский Кооперативный Техникум"
        width={200}
        height={200}
      />
    </Link>
  );
}

export const Logo = memo(LogoInner);

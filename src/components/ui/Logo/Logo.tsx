import Link from "next/link";
import styles from "./Logo.module.css";

interface LogoProps {
  shortName: string;
  href: string;
  className?: string;
}

export function Logo({ shortName, href, className }: LogoProps) {
  return (
    <Link
      className={[styles.link, className].filter(Boolean).join(" ")}
      href={href}
    >
      <span className={styles.shortName}>{shortName}</span>
    </Link>
  );
}

import Link from "next/link";

interface LogoProps {
  shortName: string;
  href: string;
  className?: string;
}

export function Logo({ shortName, href, className }: LogoProps) {
  return (
    <Link
      className={
        "min-w-15 min-h-15 rounded-lg grid place-items-center bg-linear-to-br from-[#7B2D26] to-[#DC2626] " +
        (className || "")
      }
      href={href}
    >
      <span className="font-semibold text-white">{shortName}</span>
    </Link>
  );
}

import { Unbounded } from "next/font/google";

export const fontUnbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Tahoma",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "light" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  /** На узких экранах (до 600px) кнопка на всю ширину ряда */
  fullWidthNarrow?: boolean;
  /** На всю ширину контейнера на любых ширинах экрана */
  fullWidth?: boolean;
};

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  light: styles.light,
  outline: styles.outline,
};

export function Button({
  variant = "primary",
  fullWidthNarrow = false,
  fullWidth = false,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        styles.base,
        variantClass[variant],
        fullWidthNarrow && styles.fullWidthNarrow,
        fullWidth && styles.fullWidth,
        className
      )}
      {...rest}
    />
  );
}

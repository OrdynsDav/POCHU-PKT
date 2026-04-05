import type { ComponentProps } from "react";
import Link from "next/link";
import buttonStyles from "../Button/Button.module.css";
import styles from "./CustomLink.module.css";
import type { ButtonVariant } from "../Button/Button";

const variantClass: Record<ButtonVariant, string> = {
  primary: buttonStyles.primary,
  secondary: buttonStyles.secondary,
  light: buttonStyles.light,
  outline: buttonStyles.outline,
};

export type CustomLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  fullWidthNarrow?: boolean;
  fullWidth?: boolean;
};

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function CustomLink({
  variant = "primary",
  fullWidthNarrow = false,
  fullWidth = false,
  className,
  ...rest
}: CustomLinkProps) {
  return (
    <Link
      className={cx(
        buttonStyles.base,
        variantClass[variant],
        fullWidthNarrow && buttonStyles.fullWidthNarrow,
        fullWidth && buttonStyles.fullWidth,
        styles.link,
        className
      )}
      {...rest}
    />
  );
}

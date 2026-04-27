"use client";

import type { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = {
  className?: string;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  backgroundColor?: string;
  rounded?: "md" | "full";
};

export function Skeleton({
  className,
  width,
  height,
  backgroundColor,
  rounded = "md",
}: SkeletonProps) {
  const rootClass = [
    styles.skeleton,
    rounded === "full" ? styles.circle : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    width,
    height,
    ...(backgroundColor ? ({ ["--sk-bg"]: backgroundColor } as CSSProperties) : undefined),
  };

  return <div className={rootClass} style={style} aria-hidden="true" />;
}

export function SkeletonLine(props: Omit<SkeletonProps, "rounded">) {
  return <Skeleton {...props} className={[styles.line, props.className].filter(Boolean).join(" ")} />;
}


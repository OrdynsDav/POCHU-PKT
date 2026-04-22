"use client";

import { ViewTransition, type ReactNode } from "react";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ViewTransition name="main-content-transition">
      {children}
    </ViewTransition>
  );
}

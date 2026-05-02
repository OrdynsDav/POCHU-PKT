"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";

type SpecialtyNavContextValue = {
  isPending: boolean;
  startSpecialtyNavigation: (href: string) => void;
};

const SpecialtyNavContext = createContext<SpecialtyNavContextValue | null>(
  null,
);

export function SpecialtyNavTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const startSpecialtyNavigation = useCallback(
    (href: string) => {
      startTransition(() => {
        router.push(href);
      });
    },
    [router],
  );

  const value = useMemo(
    () => ({ isPending, startSpecialtyNavigation }),
    [isPending, startSpecialtyNavigation],
  );

  return (
    <SpecialtyNavContext.Provider value={value}>
      {children}
    </SpecialtyNavContext.Provider>
  );
}

export function useSpecialtyNavTransition(): SpecialtyNavContextValue {
  const ctx = useContext(SpecialtyNavContext);
  if (!ctx) {
    throw new Error(
      "useSpecialtyNavTransition must be used within SpecialtyNavTransitionProvider",
    );
  }
  return ctx;
}

import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag,
  Landmark,
  Utensils,
  ShieldCheck,
  Monitor,
  FileText,
  Calculator,
  Scale,
} from "lucide-react";

export type SpecialtyItem = {
  id: string;
  title: string;
  code: string;
  duration: string;
  icon: LucideIcon;
};

/** Порядок и названия как на https://pskovpkt.ru/applicants/specialties/ */
export const SPECIALTIES: readonly SpecialtyItem[] = [
  {
    id: "trade",
    title: "Торговое дело",
    code: "38.02.08",
    duration: "2 г. 10 мес.",
    icon: ShoppingBag,
  },
  {
    id: "bank",
    title: "Банковское дело",
    code: "38.02.07",
    duration: "2 г. 10 мес.",
    icon: Landmark,
  },
  {
    id: "cook",
    title: "Поварское и кондитерское дело",
    code: "43.02.15",
    duration: "3 г. 10 мес.",
    icon: Utensils,
  },
  {
    id: "lawEnforcement",
    title: "Правоохранительная деятельность",
    code: "40.02.02",
    duration: "3 г. 10 мес.",
    icon: ShieldCheck,
  },
  {
    id: "software",
    title: "Разработка и управление программным обеспечением",
    code: "09.02.11",
    duration: "3 г. 10 мес.",
    icon: Monitor,
  },
  {
    id: "insurance",
    title: "Страховое дело (по отраслям)",
    code: "38.02.02",
    duration: "2 г. 10 мес.",
    icon: FileText,
  },
  {
    id: "economy",
    title: "Экономика и бухгалтерский учёт (по отраслям)",
    code: "38.02.01",
    duration: "2 г. 10 мес.",
    icon: Calculator,
  },
  {
    id: "jurisprudence",
    title: "Юриспруденция",
    code: "40.02.04",
    duration: "3 г. 10 мес.",
    icon: Scale,
  },
] as const;

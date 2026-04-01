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

export type SpecialtyPalette =
  | "trade"
  | "bank"
  | "cook"
  | "lawEnforcement"
  | "software"
  | "insurance"
  | "economy"
  | "jurisprudence";

export type SpecialtyItem = {
  id: string;
  title: string;
  code: string;
  duration: string;
  icon: LucideIcon;
  palette: SpecialtyPalette;
};

/** Порядок и названия как на https://pskovpkt.ru/applicants/specialties/ */
export const SPECIALTIES: readonly SpecialtyItem[] = [
  {
    id: "trade",
    title: "Торговое дело",
    code: "38.02.08",
    duration: "2 г. 10 мес.",
    icon: ShoppingBag,
    palette: "trade",
  },
  {
    id: "bank",
    title: "Банковское дело",
    code: "38.02.07",
    duration: "2 г. 10 мес.",
    icon: Landmark,
    palette: "bank",
  },
  {
    id: "cook",
    title: "Поварское и кондитерское дело",
    code: "43.02.15",
    duration: "3 г. 10 мес.",
    icon: Utensils,
    palette: "cook",
  },
  {
    id: "lawEnforcement",
    title: "Правоохранительная деятельность",
    code: "40.02.02",
    duration: "3 г. 10 мес.",
    icon: ShieldCheck,
    palette: "lawEnforcement",
  },
  {
    id: "software",
    title: "Информационные системы и программирование",
    code: "09.02.07",
    duration: "3 г. 10 мес.",
    icon: Monitor,
    palette: "software",
  },
  {
    id: "insurance",
    title: "Страховое дело (по отраслям)",
    code: "38.02.02",
    duration: "2 г. 10 мес.",
    icon: FileText,
    palette: "insurance",
  },
  {
    id: "economy",
    title: "Экономика и бухгалтерский учёт (по отраслям)",
    code: "38.02.01",
    duration: "2 г. 10 мес.",
    icon: Calculator,
    palette: "economy",
  },
  {
    id: "jurisprudence",
    title: "Юриспруденция",
    code: "40.02.04",
    duration: "3 г. 10 мес.",
    icon: Scale,
    palette: "jurisprudence",
  },
] as const;

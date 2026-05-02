import content from "@/data/specialties-content.json";
import type { SpecialtyContentBlock } from "@/data/specialty-content.types";
import { SPECIALTIES } from "@/data/specialties";
import type { SpecialtyContentId } from "@/data/specialties";

/** Индекс порядка как в SPECIALTIES — порядок записей в JSON может не совпадать */
const ORDER_INDEX: Record<string, number> = Object.fromEntries(
  SPECIALTIES.map((s, i) => [s.contentId, i]),
);

function orderedSpecialties() {
  return [...content.specialties].sort(
    (a, b) =>
      (ORDER_INDEX[a.id] ?? Number.MAX_SAFE_INTEGER) -
      (ORDER_INDEX[b.id] ?? Number.MAX_SAFE_INTEGER),
  );
}

/** Блоки контента в порядке следования на странице */
export function getSpecialtyBlocks(
  contentId: SpecialtyContentId,
): SpecialtyContentBlock[] {
  const row = orderedSpecialties().find((s) => s.id === contentId);
  return (row?.blocks as SpecialtyContentBlock[] | undefined) ?? [];
}

import type {
  SpecialtyContentBlock,
  SpecialtyDocumentLink,
} from "@/data/specialty-content.types";
import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "./SpecialtyContent.module.css";

function isDocumentLink(
  x: string | SpecialtyDocumentLink,
): x is SpecialtyDocumentLink {
  return typeof x === "object" && x !== null && "url" in x && "label" in x;
}

/** Строка вида "- на базе 11 классов ..." — подпункты без маркера (вложенный ul) */
const CONTINUATION_LINE = /^\s*-\s+/u;

function isContinuationLine(line: string): boolean {
  return CONTINUATION_LINE.test(line);
}

function stripContinuationLead(line: string): string {
  return line.replace(CONTINUATION_LINE, "").trimStart();
}

type LineGroup = { main: string; continuations: string[] };

/**
 * Одна строка из данных: вводная и первый вариант «на базе …» через " - ".
 * Пример: «На очном отделении - на базе 9 классов - 2 года…»
 */
const LEAD_THEN_FIRST_BASE = /^(.+?)\s+-\s+(на базе\s+\d+\s+классов.*)$/u;

function splitLeadAndFirstBase(main: string): {
  lead: string;
  firstBase: string | null;
} {
  const m = main.match(LEAD_THEN_FIRST_BASE);
  if (!m) {
    return { lead: main, firstBase: null };
  }
  return { lead: m[1].trim(), firstBase: m[2].trim() };
}

/** Объединяет первый «на базе …» из основной строки с продолжениями `- на базе …` */
function lineGroupToItemProps(group: LineGroup): {
  main: string;
  continuations: string[];
} {
  const { lead, firstBase } = splitLeadAndFirstBase(group.main);
  return {
    main: lead,
    continuations: [...(firstBase ? [firstBase] : []), ...group.continuations],
  };
}

function groupLinesWithContinuations(lines: string[]): LineGroup[] {
  const groups: LineGroup[] = [];
  for (const line of lines) {
    if (isContinuationLine(line)) {
      const text = stripContinuationLead(line);
      const last = groups[groups.length - 1];
      if (last) {
        last.continuations.push(text);
      } else {
        groups.push({ main: text, continuations: [] });
      }
    } else {
      groups.push({ main: line, continuations: [] });
    }
  }
  return groups;
}

function ListItemWithContinuations({
  main,
  continuations,
}: {
  main: string;
  continuations: string[];
}) {
  return (
    <li>
      {main}
      {continuations.length > 0 ? (
        <ul className={styles.subList}>
          {continuations.map((cont, j) => (
            <li key={j}>{cont}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function isSectionHeadingBlock(block: SpecialtyContentBlock): boolean {
  if (!block.text) {
    return false;
  }
  if (/Title$/u.test(block.role)) {
    return true;
  }
  if (
    block.role === "studyPlanIntro" ||
    block.role === "disciplinesIntro"
  ) {
    return true;
  }
  return false;
}

type SpecialtyContentProps = {
  blocks: SpecialtyContentBlock[];
};

export function SpecialtyContent({ blocks }: SpecialtyContentProps) {
  return (
    <article className={styles.article}>
      {blocks.map((block, index) => (
        <BlockFragment key={`${block.role}-${index}`} block={block} />
      ))}
    </article>
  );
}

function BlockFragment({ block }: { block: SpecialtyContentBlock }) {
  if (block.role === "pageHeading") {
    return null;
  }

  if (block.lines?.length) {
    return (
      <div className={styles.section}>
        <ul className={styles.list}>
          {groupLinesWithContinuations(block.lines).map((group, i) => (
            <ListItemWithContinuations
              key={i}
              {...lineGroupToItemProps(group)}
            />
          ))}
        </ul>
      </div>
    );
  }

  if (block.paragraphs?.length) {
    return (
      <div className={styles.section}>
        {block.paragraphs.map((p, i) => (
          <p key={i} className={styles.p}>
            {p}
          </p>
        ))}
      </div>
    );
  }

  if (block.items?.length) {
    const first = block.items[0];
    if (
      block.role === "relatedDocuments" &&
      isDocumentLink(first)
    ) {
      return (
        <PdfAttachmentsSection
          className={styles.attachmentsInCard}
          items={(block.items as SpecialtyDocumentLink[]).map((item) => ({
            href: item.url,
            file: item.label,
          }))}
        />
      );
    }

    if (isDocumentLink(first)) {
      return (
        <div className={styles.section}>
          <ul className={styles.list}>
            {(block.items as SpecialtyDocumentLink[]).map((item, i) => (
              <li key={i}>
                <a
                  className={styles.docLink}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <div className={styles.section}>
        <ul className={styles.list}>
          {groupLinesWithContinuations(block.items as string[]).map(
            (group, i) => (
              <ListItemWithContinuations
                key={i}
                {...lineGroupToItemProps(group)}
              />
            ),
          )}
        </ul>
      </div>
    );
  }

  if (block.text !== undefined && block.text !== "") {
    if (isSectionHeadingBlock(block)) {
      return (
        <div className={styles.section}>
          <h3 className={styles.h3}>{block.text}</h3>
        </div>
      );
    }

    return (
      <div className={styles.section}>
        <p className={styles.p}>{block.text}</p>
      </div>
    );
  }

  return null;
}

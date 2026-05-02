import { getPdfsForRoute } from "@/lib/getPdfsForRoute";
import { FileDown } from "lucide-react";
import Link from "next/link";
import styles from "./PdfDownloadLink.module.css"

export type PdfDownloadLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function PdfDownloadLink({ href, label, className }: PdfDownloadLinkProps) {
  return (
    <article className={styles.downloadLink}>
      <div className={styles.downloadLinkHead}>
        <FileDown className={styles.downloadLinkIcon} aria-hidden />
        <h3 className={styles.downloadLinkTitle}>{label}</h3>
      </div>
      <Link
        href={href}
        download
        className={
          className
            ? `${styles.downloadLinkAnchor} ${className}`
            : styles.downloadLinkAnchor
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.downloadLinkLabel}>Скачать файл</span>
      </Link>
    </article>
  );
}

export type PdfAttachmentItem = { href: string; file: string };

export type PdfAttachmentsSectionProps = {
  /** Маршрут страницы: PDF из pdf-manifest.json с этим sourcePage */
  pdfAppRoute?: string;
  /** Явный список (например из контента специальности); если задан — маршрут не используется */
  items?: PdfAttachmentItem[];
  heading?: string;
  className?: string;
};

export function PdfAttachmentsSection({
  pdfAppRoute,
  items: explicitItems,
  heading = "Документы для скачивания",
  className,
}: PdfAttachmentsSectionProps) {
  const items: PdfAttachmentItem[] =
    explicitItems ??
    (pdfAppRoute !== undefined ? getPdfsForRoute(pdfAppRoute) : []);
  if (items.length === 0) return null;

  return (
    <div
      className={
        className
          ? `${styles.attachmentsSection} ${className}`
          : styles.attachmentsSection
      }
    >
      <h2 className={styles.attachmentsHeading}>{heading}</h2>
      <ul className={styles.attachmentsList}>
        {items.map((f) => (
          <li className={styles.attachmentsItem} key={f.href}>
            <PdfDownloadLink href={f.href} label={f.file} />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function ContactsRequisitesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Реквизиты</h1>
        <PdfAttachmentsSection pdfAppRoute="/contacts/requisites" />
      </div>
    </section>
  );
}

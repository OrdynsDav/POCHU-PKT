import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function ContactsRequisitesPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Реквизиты</h1>
        <PdfAttachmentsSection pdfAppRoute="/contacts/requisites" />
      </Container>
    </section>
  );
}

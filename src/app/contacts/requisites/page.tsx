import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ContactsRequisitesPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Реквизиты" />
        <PdfAttachmentsSection pdfAppRoute="/contacts/requisites" />
      </Container>
    </section>
  );
}

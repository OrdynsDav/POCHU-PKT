import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutManagementPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Руководство" />
        <PdfAttachmentsSection pdfAppRoute="/about/management" />
      </Container>
    </section>
  );
}

import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutServicePage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Платные образовательные услуги" />
        <PdfAttachmentsSection pdfAppRoute="/about/service" />
      </Container>
    </section>
  );
}
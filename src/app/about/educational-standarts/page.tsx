import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutEducationalStandardsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Образовательные стандарты и требования" />
        <PdfAttachmentsSection pdfAppRoute="/about/educational-standarts" />
      </Container>
    </section>
  );
}

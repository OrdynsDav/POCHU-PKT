import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutStructurePage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Структура и органы управления образовательной организацией" />
        <PdfAttachmentsSection pdfAppRoute="/about/structure" />
      </Container>
    </section>
  );
}

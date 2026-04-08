import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function DepartmentsFulltimePage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Очное отделение" />
        <PdfAttachmentsSection pdfAppRoute="/departments/fulltime" />
      </Container>
    </section>
  );
}

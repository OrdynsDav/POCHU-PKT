import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeHistoryPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="История техникума" />
        <PdfAttachmentsSection pdfAppRoute="/life/history" />
      </Container>
    </section>
  );
}

import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "./page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function NewsSportLifePage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Студенческий спортивный клуб" />
        <PdfAttachmentsSection pdfAppRoute="/news/sport-life" />
      </Container>
    </section>
  );
}

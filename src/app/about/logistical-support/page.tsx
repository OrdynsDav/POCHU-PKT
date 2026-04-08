import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutLogisticalSupportPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда" />
        <PdfAttachmentsSection pdfAppRoute="/about/logistical-support" />
      </Container>
    </section>
  );
}

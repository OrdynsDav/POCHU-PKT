import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutMaterialSupportPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Стипендии и меры поддержки обучающихся" />
        <PdfAttachmentsSection pdfAppRoute="/about/material-support" />
      </Container>
    </section>
  );
}

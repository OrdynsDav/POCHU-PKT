import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutMealsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Организация питания в образовательной организации" />
        <PdfAttachmentsSection pdfAppRoute="/about/logistical-support/meals" />
      </Container>
    </section>
  );
}

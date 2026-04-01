import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container, Section } from "@/components/ui";
import { SpecialtiesGrid } from "./_components/SpecialtiesGrid";

export default function ApplicantsSpecialtiesPage() {
  return (
    <Section className={styles.page} id="specialties">
      <Container>
        <h1 className={styles.title}>Специальности</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/specialties" />
        <SpecialtiesGrid />
      </Container>
    </Section>
  );
}

import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container, Section } from "@/components/ui";
import { SpecialtiesGrid } from "./_components/SpecialtiesGrid";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ApplicantsSpecialtiesPage() {
  return (
    <Section className={styles.page} id="specialties">
      <Container>
        <PageTitle title="Специальности" />
        <PdfAttachmentsSection pdfAppRoute="/applicants/specialties" />
        <SpecialtiesGrid />
      </Container>
    </Section>
  );
}

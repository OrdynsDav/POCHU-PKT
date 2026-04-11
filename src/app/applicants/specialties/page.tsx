import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container, Section } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { SpecialtiesList } from "@/components/lists/SpecialtiesList/SpecialtiesList";

export default function ApplicantsSpecialtiesPage() {
  return (
    <Section className={styles.page} id="specialties">
      <Container>
        <PageTitle title="Специальности" />
        <PdfAttachmentsSection pdfAppRoute="/applicants/specialties" />
        <SpecialtiesList />
      </Container>
    </Section>
  );
}

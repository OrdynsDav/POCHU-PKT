import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { SpecialtiesList } from "@/components/lists/SpecialtiesList/SpecialtiesList";

export default function ApplicantsSpecialtiesPage() {
  return (
    <section className="page" id="specialties">
      <Container>
        <PageTitle title="Специальности" />
        <PdfAttachmentsSection pdfAppRoute="/applicants/specialties" />
        <SpecialtiesList />
      </Container>
    </section>
  );
}

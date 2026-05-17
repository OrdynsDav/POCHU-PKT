import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function DepartmentsParttimePage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Заочное отделение" />
        <PdfAttachmentsSection pdfAppRoute="/departments/parttime" />
      </Container>
    </section>
  );
}

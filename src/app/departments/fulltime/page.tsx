import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function DepartmentsFulltimePage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Очное отделение" />
        <PdfAttachmentsSection pdfAppRoute="/departments/fulltime" />
      </Container>
    </section>
  );
}

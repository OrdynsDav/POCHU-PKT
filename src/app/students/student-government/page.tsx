import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function StudentsSelfGovPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Студенческое самоуправление" />
        <PdfAttachmentsSection pdfAppRoute="/students/student-government" />
      </Container>
    </section>
  );
}

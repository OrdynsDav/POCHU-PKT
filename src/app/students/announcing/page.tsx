import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function StudentsAnnouncingPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Объявления" />
        <PdfAttachmentsSection pdfAppRoute="/students/announcing" />
      </Container>
    </section>
  );
}

import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutTeachersPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Педагогический состав" />
        <PdfAttachmentsSection pdfAppRoute="/about/teachers" />
      </Container>
    </section>
  );
}

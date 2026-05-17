import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutEducationalStandardsPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Образовательные стандарты и требования" />
        <PdfAttachmentsSection pdfAppRoute="/about/educational-standarts" />
      </Container>
    </section>
  );
}

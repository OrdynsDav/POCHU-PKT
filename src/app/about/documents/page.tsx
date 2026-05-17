import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutDocsPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Документы" />
        <PdfAttachmentsSection pdfAppRoute="/about/documents" />
      </Container>
    </section>
  );
}

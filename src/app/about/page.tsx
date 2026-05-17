import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutMainPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Основные сведения" />
        <PdfAttachmentsSection pdfAppRoute="/about" />
      </Container>
    </section>
  );
}

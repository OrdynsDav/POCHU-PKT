import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutStructurePage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Структура и органы управления образовательной организацией" />
        <PdfAttachmentsSection pdfAppRoute="/about/structure" />
      </Container>
    </section>
  );
}

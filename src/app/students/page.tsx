import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function StudentsRulesPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Правила внутреннего распорядка" />
        <PdfAttachmentsSection pdfAppRoute="/students" />
      </Container>
    </section>
  );
}

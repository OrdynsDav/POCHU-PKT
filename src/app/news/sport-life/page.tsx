import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function NewsSportLifePage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Студенческий спортивный клуб" />
        <PdfAttachmentsSection pdfAppRoute="/news/sport-life" />
      </Container>
    </section>
  );
}

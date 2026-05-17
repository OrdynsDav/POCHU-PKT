import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeHistoryPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="История техникума" />
        <PdfAttachmentsSection pdfAppRoute="/life/history" />
      </Container>
    </section>
  );
}

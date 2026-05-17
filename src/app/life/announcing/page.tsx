import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeAnnouncingPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Объявления" />
        <PdfAttachmentsSection pdfAppRoute="/life/announcing" />
      </Container>
    </section>
  );
}

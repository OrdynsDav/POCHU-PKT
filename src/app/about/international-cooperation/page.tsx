import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutInternationalCooperationPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Международное сотрудничество" />
        <PdfAttachmentsSection pdfAppRoute="/about/international-cooperation" />
      </Container>
    </section>
  );
}

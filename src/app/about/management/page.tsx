import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutManagementPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Руководство" />
        <PdfAttachmentsSection pdfAppRoute="/about/management" />
      </Container>
    </section>
  );
}

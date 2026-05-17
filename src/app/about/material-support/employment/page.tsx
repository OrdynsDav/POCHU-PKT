import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutEmploymentPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Трудоустройство выпускников" />
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/employment.php" />
      </Container>
    </section>
  );
}

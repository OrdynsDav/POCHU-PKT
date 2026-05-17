import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutDormitoryPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Общежитие" />
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/dormitory.php" />
      </Container>
    </section>
  );
}

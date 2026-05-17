import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ApplicantsCommissionPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Приёмная комиссия" />
        <PdfAttachmentsSection pdfAppRoute="/applicants/inspection-board" />
      </Container>
    </section>
  );
}

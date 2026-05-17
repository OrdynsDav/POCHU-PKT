import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ApplicantsDigitsPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Контрольные цифры приёма" />
        <PdfAttachmentsSection pdfAppRoute="/applicants/receiving-control-digits" />
      </Container>
    </section>
  );
}

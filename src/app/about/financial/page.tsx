import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutFinancialPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Финансово-хозяйственная деятельность" />
        <PdfAttachmentsSection pdfAppRoute="/about/financial" />
      </Container>
    </section>
  );
}

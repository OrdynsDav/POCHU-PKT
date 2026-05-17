import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutLogisticalSupportPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда" />
        <PdfAttachmentsSection pdfAppRoute="/about/logistical-support" />
      </Container>
    </section>
  );
}

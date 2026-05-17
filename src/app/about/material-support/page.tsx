import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutMaterialSupportPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Стипендии и меры поддержки обучающихся" />
        <PdfAttachmentsSection pdfAppRoute="/about/material-support" />
      </Container>
    </section>
  );
}

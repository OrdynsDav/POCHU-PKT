import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutCareerPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Вакантные места для приёма (перевода) обучающихся" />
        <PdfAttachmentsSection pdfAppRoute="/about/career" />
      </Container>
    </section>
  );
}

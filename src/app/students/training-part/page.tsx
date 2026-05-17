import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function StudentsMentoringPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Наставничество" />
        <PdfAttachmentsSection pdfAppRoute="/students/training-part" />
      </Container>
    </section>
  );
}

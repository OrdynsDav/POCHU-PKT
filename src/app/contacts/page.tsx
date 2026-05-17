import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ContactsMainPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Контакты учреждения" />
        <PdfAttachmentsSection pdfAppRoute="/contacts" />
      </Container>
    </section>
  );
}

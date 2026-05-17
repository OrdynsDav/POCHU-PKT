import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function ContactsRequisitesPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Реквизиты" />
        <PdfAttachmentsSection pdfAppRoute="/contacts/requisites" />
      </Container>
    </section>
  );
}

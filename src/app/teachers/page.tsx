import { Container } from "@/components/ui/Container/Container";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";

export default function TeachersPage() {
    return (
        <section className="page">
        <Container>
            <PageTitle title="Аттестации" />
            <PdfAttachmentsSection pdfAppRoute="/teachers" />
        </Container>
        </section>
    );
}
import { Container } from "@/components/ui/Container/Container";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { Gallery } from "@/components/sections";

export default function LifeGalleryPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Фотогалерея" />
        <Gallery />
      </Container>
    </section>
  );
}
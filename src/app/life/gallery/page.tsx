import { Container } from "@/components/ui/Container/Container";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import styles from "../page.module.css";
import { Gallery } from "@/components/sections";

export default function LifeGalleryPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Фотогалерея" />
        <Gallery />
      </Container>
    </section>
  );
}
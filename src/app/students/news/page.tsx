import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { NewsList } from "@/components/lists/NewsList/NewsList";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

const news = [
  {
    title: "В гости в техникум!",
    date: "13 февраля 2026",
    excerpt:
      "С профориентационным визитом в техникум приезжали учащиеся 8 класса МОУ «Сланцевская СОШ №2» (Ленинградская область).",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/e62/600_400_2/c3nup5760s6lsvgt5delnzn2nrkk2x88.jpg",
    link: "/life/news/v-gosti-v-tekhnikum",
  },
  {
    title: "Д2. Техник-криминалист. 2026",
    date: "12 февраля 2026",
    excerpt:
      "Продолжаются конкурсные испытания Чемпионата «Профессионалы» на площадке компетенции «Техник-криминалист».",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/880/720_463_2/t1frz853gk0ktayx061pih5g4u6d2qf2.jpg",
    link: "https://pskovpkt.ru/news/for-students/d2-tekhnik-kriminalist-2026/",
  },
  {
    title: "Документационное обеспечение управления",
    date: "12 февраля 2026",
    excerpt:
      "Продолжаются испытательные соревнования на чемпионатной площадке по компетенции «Документационное обеспечение управления и архивоведение».",
    image:
      "https://pskovpkt.ru/upload/resize_cache/iblock/478/720_463_2/2la1vobo7krhy4pc5ennuu0liitu7zxp.jpg",
    link: "https://pskovpkt.ru/news/for-students/d2-dokumentatsionnoe-obespechenie-upravleniya-i-arkhivovedenie-2026/",
  },
];

export default function StudentsNewsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Новости" />
        <PdfAttachmentsSection pdfAppRoute="/students/news" />
        <NewsList news={news} />
      </Container>
    </section>
  );
}

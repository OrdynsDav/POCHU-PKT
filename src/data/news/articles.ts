export interface NewsArticleImage {
  src: string;
  alt: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  /** ISO 8601 с часовым поясом */
  publishedAt: string;
  paragraphs: string[];
  images: NewsArticleImage[];
}

/** Полные материалы новостей (текст, дата, галерея). Список превью на `/life/news` может ссылаться сюда по `slug`. */
export const newsArticles: NewsArticle[] = [
  {
    slug: "v-gosti-v-tekhnikum",
    title: "В гости в техникум!",
    publishedAt: "2026-02-13T07:02:00+03:00",
    paragraphs: [
      "С профориентационным визитом в Псковский кооперативный техникум на этой неделе приезжали учащиеся 8 класса МОУ «Сланцевская средняя общеобразовательная школа №2» (Ленинградская область).",
      "Руководитель по воспитательной работе Екатерина Олеговна Бросова рассказала школьникам об истории возникновения техникума, ознакомила с перечнем специальностей, которые можно получить после освоения основного и среднего образования. Школьники узнали об условиях приёма в техникум, проживания в общежитии, стипендиях.",
      "Ребята посетили современные оборудованные учебные кабинеты, задали волнующие вопросы. А после поблагодарили коллектив техникума за тёплый приём и организованную экскурсию по техникуму.",
    ],
    images: [
      {
        src: "https://pskovpkt.ru/upload/resize_cache/iblock/e62/780_600_2/c3nup5760s6lsvgt5delnzn2nrkk2x88.jpg",
        alt: "Экскурсия школьников в Псковском кооперативном техникуме",
      },
      {
        src: "https://pskovpkt.ru/upload/resize_cache/iblock/068/780_600_2/kw7kdi96bcxi0nzcb5yiel14v5ps78b1.jpg",
        alt: "Школьники на профориентационном визите в техникуме",
      },
      {
        src: "https://pskovpkt.ru/upload/resize_cache/iblock/084/780_600_2/4ctx9tyyrts2kcs1oc2p7lzmak1to0vr.jpg",
        alt: "Встреча с руководителем по воспитательной работе",
      },
      {
        src: "https://pskovpkt.ru/upload/resize_cache/iblock/a73/780_600_2/ul1joqmipazfed7p4zm8ozb9u1mlnshg.jpg",
        alt: "Посещение учебных кабинетов техникума",
      },
    ],
  },
];

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getNewsArticleSlugs(): string[] {
  return newsArticles.map((a) => a.slug);
}

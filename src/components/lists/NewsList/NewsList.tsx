import { NewsCard } from "@/components/cards/NewsCard/NewsCard"
import styles from "./NewsList.module.css"
import { NewsListProps } from "../types"

export const NewsList = ({news}: NewsListProps) => {
    return (
        <ul
            className={styles.newsList}
            role="list"
            aria-label="Список новостей"
          >
            {news.map(({ title, link, image, date, excerpt }) => (
              <li
                key={title}
                className={styles.newsItem}
              >
                <NewsCard
                  title={title}
                  link={link}
                  image={image}
                  date={date}
                  excerpt={excerpt}
                />
              </li>
            ))}
          </ul>
    )
}
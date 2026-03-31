import styles from "../AboutPage.module.css";

type AboutTitlePageProps = {
  title: string;
};

export function AboutTitlePage({ title }: AboutTitlePageProps) {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  );
}

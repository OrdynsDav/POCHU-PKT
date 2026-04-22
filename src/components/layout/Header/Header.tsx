import { HeaderNav } from "./HeaderNav/HeaderNav";
import { siteConfig } from "@/config/site";
import { Container, Logo } from "@/components/ui";
import styles from './Header.module.css'

export function Header() {
  const { logo } = siteConfig;

  return (
    <header
      role="banner"
      aria-label="Главная навигация сайта"
      className={styles.header}
    >
      <Container>
        <div className={styles.headerWrapper}>
          <Logo shortName={logo.shortName} href={logo.href} />
          <HeaderNav />
        </div>
      </Container>
    </header>
  );
}

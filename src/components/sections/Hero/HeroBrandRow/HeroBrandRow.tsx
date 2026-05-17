import { Logo } from "@/components/ui";
import styles from "./HeroBrandRow.module.css";
import { HeroSlider } from "../HeroSlider/HeroSlider";

type HeroBrandRowProps = {
  shortName: string;
  href: string;
};

export const HeroBrandRow = ({ shortName, href }: HeroBrandRowProps) => {
  return (
    <div className={`${styles.logoRow} hero-anim-right hero-delay-120`}>
      <div className={styles.logoWrap}>
        <Logo shortName={shortName} href={href} className={styles.logo} />
      </div>
      <HeroSlider />
    </div>
  );
};

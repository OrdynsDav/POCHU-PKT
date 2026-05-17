import styles from "./HeroBrandRow.module.css";
import { HeroSlider } from "../HeroSlider/HeroSlider";

export const HeroBrandRow = () => {
  return (
    <div className={`${styles.logoRow} hero-anim-right hero-delay-120`}>
      <div className={styles.logoWrap}>
        <div className={styles.logo}>
          <span className={styles.shortName}>ПКТ</span>
        </div>
      </div>
      <HeroSlider />
    </div>
  );
};

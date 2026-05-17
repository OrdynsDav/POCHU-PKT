import styles from "./HeroSlider.module.css";

const SLIDER_WORDS = ["Престиж", "Качество", "Традиции"] as const;
const SLIDER_DUPLICATE = [...SLIDER_WORDS, SLIDER_WORDS[0]] as const;

export function HeroSlider() {
    return (
        <div className={styles.slider}>
            <div className={styles.sliderTrack}>
                <div className={styles.sliderText}>
                    {SLIDER_DUPLICATE.map((word, index) => (
                        <p key={index} className={styles.sliderTextItem}>{word}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

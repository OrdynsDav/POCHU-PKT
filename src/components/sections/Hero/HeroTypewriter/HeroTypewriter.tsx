"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroTypewriter.module.css";

const TYPEWRITER_WORDS = ["Престиж", "Качество", "Традиции"] as const;
const TYPEWRITER_MS_PER_CHAR = 90;
const TYPEWRITER_MS_HOLD = 1600;

/**
 * Текст обновляется через `textContent` по ref — без `setState` на каждую букву,
 * поэтому сам компонент после mount не ререндерится и не тянет соседей.
 */
export function HeroTypewriter() {
    const lineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let wordIndex = 0;
        let visibleCount = 0;
        let timeoutId: number | undefined;
        let cancelled = false;

        const setLine = (text: string) => {
            const el = lineRef.current;
            if (el) el.textContent = text;
        };

        const step = () => {
            if (cancelled) return;
            const word = TYPEWRITER_WORDS[wordIndex];

            if (visibleCount < word.length) {
                visibleCount += 1;
                setLine(word.slice(0, visibleCount));
                timeoutId = window.setTimeout(step, TYPEWRITER_MS_PER_CHAR);
                return;
            }

            timeoutId = window.setTimeout(() => {
                if (cancelled) return;
                wordIndex = (wordIndex + 1) % TYPEWRITER_WORDS.length;
                visibleCount = 0;
                step();
            }, TYPEWRITER_MS_HOLD);
        };

        step();

        return () => {
            cancelled = true;
            if (timeoutId !== undefined) window.clearTimeout(timeoutId);
        };
    }, []);

    return (
        <p
            className={styles.typewriter}
            aria-live="polite"
            aria-atomic="true"
        >
            <span ref={lineRef} className={styles.typewriterText} />
        </p>
    );
}

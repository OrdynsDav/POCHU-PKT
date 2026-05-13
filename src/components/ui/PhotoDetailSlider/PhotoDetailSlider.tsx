"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import styles from "./PhotoDetailSlider.module.css";

export type PhotoDetailSlide = {
  src: string;
  alt: string;
};

export type PhotoDetailSliderProps = {
  slides: readonly PhotoDetailSlide[];
  /** Подписи доступности для диалога и слайдера. */
  title: string;
  /** Лайтбокс открыт. */
  open: boolean;
  /** Индекс снимка, с которого открыть слайдер (0 … slides.length − 1). */
  startIndex: number;
  /**
   * Закрыть лайтбокс. Обычный колбэк с клиента (не React Server Action);
   * суффикс `Action` из‑за эвристики Next для пропсов client-компонентов.
   */
  onCloseAction: () => void;
};

function clampIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return Math.min(Math.max(0, Math.floor(index)), length - 1);
}

/**
 * Только полноэкранный просмотр: Splide внутри оверлея.
 * Превью и вёрстка страницы задаются снаружи; открытие через `open` и `startIndex`.
 */
export function PhotoDetailSlider({
  slides,
  title,
  open,
  startIndex,
  onCloseAction,
}: PhotoDetailSliderProps) {
  const onCloseRef = useRef(onCloseAction);
  onCloseRef.current = onCloseAction;

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open || slides.length === 0) {
    return null;
  }

  const start = clampIndex(startIndex, slides.length);

  return (
    <div
      className={styles.lightboxOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Просмотр фотографий: ${title}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCloseRef.current();
      }}
    >
      <div className={styles.lightbox}>
        <button
          type="button"
          className={styles.lightboxClose}
          onClick={() => onCloseRef.current()}
          aria-label="Закрыть просмотр"
        >
          <X className={styles.lightboxCloseIcon} width={24} height={24} />
        </button>

        <Splide
          key={`lb-${start}-${slides.length}`}
          className={styles.lightboxSplide}
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            gap: 0,
            rewind: true,
            pagination: slides.length > 1,
            arrows: false,
            speed: 450,
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            start,
          }}
          aria-label={`Просмотр фото: ${title}`}
        >
          {slides.map((img) => (
            <SplideSlide key={`lightbox-${img.src}`}>
              <div className={styles.lightboxSlide}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                  quality={100}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

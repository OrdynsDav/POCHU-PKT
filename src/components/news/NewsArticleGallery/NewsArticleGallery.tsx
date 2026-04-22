"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import type { NewsArticleImage } from "@/data/news/articles";
import { useEffect, useMemo, useState, ViewTransition } from "react";
import styles from "./NewsArticleGallery.module.css";
import { ClosedCaption, ClosedCaptionIcon, X } from "lucide-react";

type NewsArticleGalleryProps = {
  images: NewsArticleImage[];
  title: string;
};

function toViewTransitionName(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function NewsArticleGallery({ images, title }: NewsArticleGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const vtNames = useMemo(
    () => images.map((img) => `news-gallery-${toViewTransitionName(img.src)}`),
    [images]
  );

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.wrap}>
        <Splide
          className={styles.splide}
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: 20,
            rewind: true,
            pagination: false,
            arrows: images.length > 1,
            speed: 600,
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            height: "auto",
            breakpoints: {
              768: {
                perPage: 1,
              },
            },
          }}
          aria-label={`Фотографии: ${title}`}
        >
          {images.map((img, i) => (
            <SplideSlide key={img.src}>
              <button
                type="button"
                className={styles.slideButton}
                onClick={() => {
                  setActiveIndex(i);
                  setIsOpen(true);
                }}
                aria-label={`Открыть фото ${i + 1} из ${images.length}`}
              >
                <div className={styles.slide}>
                  {isOpen ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, min(56rem, 90vw)"
                      className={styles.image}
                      priority={i === 0}
                      quality={95}
                    />
                  ) : (
                    <ViewTransition name={vtNames[i]}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, min(56rem, 90vw)"
                        className={styles.image}
                        priority={i === 0}
                        quality={95}
                      />
                    </ViewTransition>
                  )}
                </div>
              </button>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {isOpen ? (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Просмотр фотографий: ${title}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className={styles.lightbox}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть просмотр"
            >
              <X className={styles.lightboxCloseIcon} width={24} height={24} />
            </button>

            <Splide
              className={styles.lightboxSplide}
              options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                gap: 0,
                rewind: true,
                pagination: images.length > 1,
                arrows: false,
                speed: 450,
                easing: "cubic-bezier(0.33, 1, 0.68, 1)",
                start: activeIndex,
              }}
              onMoved={(_splide, newIndex: number) => setActiveIndex(newIndex)}
              aria-label={`Просмотр фото: ${title}`}
            >
              {images.map((img, i) => (
                <SplideSlide key={`lightbox-${img.src}`}>
                  <div className={styles.lightboxSlide}>
                    {i === activeIndex ? (
                      <ViewTransition name={vtNames[i]}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="100vw"
                          className={styles.lightboxImage}
                          quality={100}
                        />
                      </ViewTransition>
                    ) : (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100vw"
                        className={styles.lightboxImage}
                        quality={100}
                      />
                    )}
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      ) : null}
    </>
  );
}

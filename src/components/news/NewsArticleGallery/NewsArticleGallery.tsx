"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useCallback, useState } from "react";
import type { NewsArticleImage } from "@/data/news/articles";
import { PhotoDetailSlider } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";
import styles from "./NewsArticleGallery.module.css";

type NewsArticleGalleryProps = {
  images: NewsArticleImage[];
  title: string;
};

export function NewsArticleGallery({ images, title }: NewsArticleGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.wrap}>
        <Splide
          className={styles.splide}
          options={{
            type: "slide",
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
                  setStartIndex(i);
                  setLightboxOpen(true);
                }}
                aria-label={`Открыть фото ${i + 1} из ${images.length}: ${img.alt}`}
              >
                <div className={styles.slide}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 48em) 100vw, min(56rem, 90vw)"
                    className={styles.slideImage}
                    priority={i === 0}
                    quality={95}
                  />
                </div>
              </button>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <PhotoDetailSlider
        slides={images}
        title={title}
        open={lightboxOpen}
        startIndex={startIndex}
        onCloseAction={closeLightbox}
      />
    </>
  );
}

"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import type { NewsArticleImage } from "@/data/news/articles";
import styles from "./NewsArticleGallery.module.css";

type NewsArticleGalleryProps = {
  images: NewsArticleImage[];
  title: string;
};

export function NewsArticleGallery({ images, title }: NewsArticleGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
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
            <div className={styles.slide}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, min(56rem, 90vw)"
                className={styles.image}
                priority={i === 0}
                quality={95}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { PhotoDetailSlide } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";
import { PhotoDetailSlider } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";
import pageStyles from "./page.module.css";

type ScheduleAppGalleryProps = {
  slides: readonly PhotoDetailSlide[];
  /** Подпись для лайтбокса (доступность). */
  galleryTitle: string;
};

export function ScheduleAppGallery({ slides, galleryTitle }: ScheduleAppGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  if (slides.length === 0) {
    return null;
  }

  return (
    <>
      <div className={pageStyles.gallery} role="list">
        {slides.map((img, i) => (
          <figure key={img.src} className={pageStyles.card} role="listitem">
            <button
              type="button"
              className={pageStyles.cardOpen}
              onClick={() => {
                setStartIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Открыть скриншот ${i + 1} из ${slides.length}: ${img.alt}`}
            >
              <div className={pageStyles.cardMedia}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 280px"
                  className={pageStyles.cardImage}
                />
              </div>
            </button>
            <figcaption className={pageStyles.caption}>{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      <PhotoDetailSlider
        slides={slides}
        title={galleryTitle}
        open={lightboxOpen}
        startIndex={startIndex}
        onCloseAction={closeLightbox}
      />
    </>
  );
}

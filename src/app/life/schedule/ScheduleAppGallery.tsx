"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { PhotoDetailSlide } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";
import { PhotoDetailSlider } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";
import pageStyles from "./page.module.css";

export type ScheduleGallerySlide = PhotoDetailSlide & {
  tag: string;
  title: string;
  description: string;
};

type ScheduleAppGalleryProps = {
  slides: readonly ScheduleGallerySlide[];
  galleryTitle: string;
};

function GalleryCardImage({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={pageStyles.cardMedia}>
      <span
        className={[
          pageStyles.mediaPlaceholder,
          loaded ? pageStyles.mediaPlaceholderHidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      />
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
        className={[
          pageStyles.cardImage,
          loaded ? pageStyles.cardImageLoaded : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export function ScheduleAppGallery({ slides, galleryTitle }: ScheduleAppGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  if (slides.length === 0) {
    return null;
  }

  const lightboxSlides: PhotoDetailSlide[] = slides.map(({ src, alt }) => ({ src, alt }));

  return (
    <>
      <div className={pageStyles.gallery} role="list">
        {slides.map((slide, i) => (
          <article key={slide.src} className={pageStyles.card} role="listitem">
            <span className={pageStyles.cardIndex} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <button
              type="button"
              className={pageStyles.cardOpen}
              onClick={() => {
                setStartIndex(i);
                setLightboxOpen(true);
              }}
              aria-label={`Открыть: ${slide.title}. ${slide.description}`}
            >
              <div className={pageStyles.cardPreview}>
                <GalleryCardImage src={slide.src} />
                <span className={pageStyles.cardExpand} aria-hidden="true">
                  Смотреть
                </span>
              </div>
            </button>
            <div className={pageStyles.cardBody}>
              <span className={pageStyles.cardTag}>{slide.tag}</span>
              <h4 className={pageStyles.cardTitle}>{slide.title}</h4>
              <p className={pageStyles.cardDesc}>{slide.description}</p>
            </div>
          </article>
        ))}
      </div>

      <PhotoDetailSlider
        slides={lightboxSlides}
        title={galleryTitle}
        open={lightboxOpen}
        startIndex={startIndex}
        onCloseAction={closeLightbox}
      />
    </>
  );
}

"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";
import { useEffect, useMemo, useState, ViewTransition } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { X } from "lucide-react";

const imagesLight = [
    {
        src: "/images/gradebook/gradebook-login-light.jpg",
        alt: "Фотография входа в систему ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-dashboard-light.jpg",
        alt: "Фотография первой страницы системы ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-dashboard-skeleton-light.jpg",
        alt: "Фотография загрузки первой страницы системы ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-grades-light.jpg",
        alt: "Фотография оценок в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-grades-item-light.jpg",
        alt: "Фотография оценок определённого предмета в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-shedule-light.jpg",
        alt: "Фотография расписания в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-profile-light.jpg",
        alt: "Фотография профиля в системе ЭЖ",
    },
    {
        src: "/images/gradebook/gradebook-profile-light-2.jpg",
        alt: "Фотография профиля в системе ЭЖ (продолжение) (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-notifications-light.jpg",
        alt: "Фотография уведомлений в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-config-light.jpg",
        alt: "Фотография настроек в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-help-light.jpg",
        alt: "Фотография помощи в системе ЭЖ (светлая тема)",
    },
    {
        src: "/images/gradebook/gradebook-about-light.jpg",
        alt: "Фотография о системе ЭЖ (светлая тема)",
    },
]

export function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!isOpen) return;
    
        const prevOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = "hidden";
    
        const onKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") setIsOpen(false);
        };
    
        window.addEventListener("keydown", onKeyDown);
        return () => {
          window.removeEventListener("keydown", onKeyDown);
          document.documentElement.style.overflow = prevOverflow;
        };
      }, [isOpen]);

    return (
        <div
            id="gallery"
            aria-labelledby="gallery-heading"
            className={styles.gallery}
            style={{ "--isOpen": isOpen ? "hidden" : "unset" } as React.CSSProperties}
        >
            <div className={styles.galleryInner}>
                <div className={styles.galleryContent}>
                    <h2 className={styles.galleryTitle}>Мобильное приложение (светлая тема)</h2>
                    <ul className={styles.galleryList}>
                        {imagesLight.map((image, i) => (
                            <li className={styles.galleryItem} key={image.alt}>
                                <button
                                    type="button"
                                    className={styles.galleryButton}
                                    onClick={() => {
                                        setActiveIndex(i);
                                        setIsOpen(true);
                                    }}
                                    aria-label={`Открыть фото ${i + 1} из ${imagesLight.length}`}
                                >
                                    <Image className={styles.galleryImage} src={image.src} alt={image.alt} width={780} height={600} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isOpen ? (
                <div
                    className={styles.lightboxOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Просмотр фотографий галереи"
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
                                pagination: imagesLight.length > 1,
                                arrows: false,
                                speed: 450,
                                easing: "cubic-bezier(0.33, 1, 0.68, 1)",
                                start: activeIndex,
                            }}
                            onMoved={(_splide, newIndex: number) => setActiveIndex(newIndex)}
                            aria-label="Просмотр фото галереи"
                        >
                            {imagesLight.map((img, i) => (
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
            ) : null}
        </div>
    );
}
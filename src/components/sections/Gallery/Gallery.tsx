"use client";

import Image from "next/image";
import styles from "./Gallery.module.css";
import { useCallback, useState } from "react";
import { PhotoDetailSlider } from "@/components/ui/PhotoDetailSlider/PhotoDetailSlider";

const GALLERY_TITLE = "Мобильное приложение (светлая тема)";

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
];

export function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    return (
        <>
            <div
                id="gallery"
                aria-labelledby="gallery-heading"
                className={styles.gallery}
                style={{ "--isOpen": lightboxOpen ? "hidden" : "unset" } as React.CSSProperties}
            >
                <div className={styles.galleryInner}>
                    <div className={styles.galleryContent}>
                        <h2 className={styles.galleryTitle}>{GALLERY_TITLE}</h2>
                        <ul className={styles.galleryList}>
                            {imagesLight.map((image, i) => (
                                <li className={styles.galleryItem} key={image.alt}>
                                    <button
                                        type="button"
                                        className={styles.galleryButton}
                                        onClick={() => {
                                            setStartIndex(i);
                                            setLightboxOpen(true);
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
            </div>

            <PhotoDetailSlider
                slides={imagesLight}
                title={GALLERY_TITLE}
                open={lightboxOpen}
                startIndex={startIndex}
                onCloseAction={closeLightbox}
            />
        </>
    );
}

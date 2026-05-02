"use client";

import { ViewTransition } from "react";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import { useSpecialtyNavTransition } from "@/components/specialties/SpecialtyNavTransitionProvider";
import { SpecialtyDetailSkeleton } from "@/components/specialties/SpecialtyDetailSkeleton/SpecialtyDetailSkeleton";
import stylesLink from "./page.module.css";
import { getSpecialtyBlocks } from "@/data/specialty-content";
import { SpecialtyContent } from "@/components/specialties/SpecialtyContent/SpecialtyContent";
import { useGetSpecialty } from "@/lib/hooks/useGetSpecialty";

export default function Page() {
    const { isPending } = useSpecialtyNavTransition();
    const speciality = useGetSpecialty();

    const Icon = speciality.icon;

    return (
        <ViewTransition name="specialty-detail-content">
            {isPending ? (
                <div
                    role="status"
                    aria-live="polite"
                    aria-busy="true"
                    aria-label="Загрузка страницы специальности"
                >
                    <SpecialtyDetailSkeleton />
                </div>
            ) : (
                <>
                    <div className={stylesLink.header}>
                        <PageTitle title={speciality.title} />
                        <div className={stylesLink.metaBar} aria-label="Код и срок обучения">
                            <div className={stylesLink.iconWrap}>
                                <Icon className={stylesLink.icon} aria-hidden />
                            </div>
                            <div className={stylesLink.chips}>
                                <span className={stylesLink.code}>{speciality.code}</span>
                                <span className={stylesLink.duration}>
                                    {speciality.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    <SpecialtyContent
                        blocks={getSpecialtyBlocks(speciality.contentId)}
                    /> 
                </>
            )}
        </ViewTransition>
    );
}

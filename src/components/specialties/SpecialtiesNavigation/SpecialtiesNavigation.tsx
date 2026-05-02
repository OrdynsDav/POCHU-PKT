"use client"

import { SPECIALTIES } from "@/data/specialties";
import { notFound, useParams } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

export function SpecialtiesNavigation() {
    const params = useParams();
    const idParam = params.id;
    const id = typeof idParam === "string" ? idParam : idParam?.[0];
    const speciality = SPECIALTIES.find((spec) => spec.id === id);
    if (!speciality) {
        return notFound();
    }
    const breadcrumbs = [
        { label: "Главная", href: "/" },
        { label: "Специальности", href: "/applicants/specialties" },
        { label: speciality.title, isCurrent: true },
    ];
    return <Breadcrumbs items={breadcrumbs} />
}
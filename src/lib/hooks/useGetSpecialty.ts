import { SPECIALTIES } from "@/data/specialties";
import { notFound, useParams } from "next/navigation";

export function useGetSpecialty() {
    const params = useParams();
    const idParam = params.id;
    const id = typeof idParam === "string" ? idParam : idParam?.[0];
    const speciality = SPECIALTIES.find((spec) => spec.id === id);
    if (!speciality) {
        return notFound();
    }
    return speciality;
}
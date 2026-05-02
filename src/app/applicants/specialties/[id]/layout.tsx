import { Suspense } from "react";
import { Container, Section } from "@/components/ui";
import { SpecialtyAside } from "@/components/specialties/SpecialtyAside/SpecialtyAside";
import { SpecialtyNavTransitionProvider } from "@/components/specialties/SpecialtyNavTransitionProvider";
import { SpecialtyDetailSkeleton } from "@/components/specialties/SpecialtyDetailSkeleton/SpecialtyDetailSkeleton";
import applicantsPageStyles from "../../page.module.css";
import layoutStyles from "./layout.module.css";
import { SpecialtiesNavigation } from "@/components/specialties/SpecialtiesNavigation/SpecialtiesNavigation";

export default function SpecialtyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section id="specialty" className={applicantsPageStyles.page}>
      <Container>
        <SpecialtiesNavigation />
        <SpecialtyNavTransitionProvider>
          <div className={layoutStyles.shell}>
            <SpecialtyAside />
            <div className={layoutStyles.main}>
              <Suspense
                fallback={
                  <div
                    role="status"
                    aria-live="polite"
                    aria-busy="true"
                    aria-label="Загрузка страницы специальности"
                  >
                    <SpecialtyDetailSkeleton />
                  </div>
                }
              >
                {children}
              </Suspense>
            </div>
          </div>
        </SpecialtyNavTransitionProvider>
      </Container>
    </Section>
  );
}

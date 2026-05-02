import { Suspense } from "react";
import { Container, Section } from "@/components/ui";
import { SpecialtyAside } from "@/components/specialties/SpecialtyAside/SpecialtyAside";
import { SpecialtyNavTransitionProvider } from "@/components/specialties/SpecialtyNavTransitionProvider";
import { SpecialtyDetailSkeleton } from "@/components/specialties/SpecialtyDetailSkeleton/SpecialtyDetailSkeleton";
import applicantsPageStyles from "../../page.module.css";
import layoutStyles from "./layout.module.css";
import { ArrowLeft } from "lucide-react";
import stylesLink from "./page.module.css";
import Link from "next/link";

export default function SpecialtyDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section id="specialty" className={applicantsPageStyles.page}>
      <Container>
        <nav className={stylesLink.nav} aria-label="Навигация по специальностям">
          <Link className={stylesLink.backLink} href="/applicants/specialties">
            <ArrowLeft className={stylesLink.backIcon} aria-hidden />
            <span>К списку специальностей</span>
          </Link>
        </nav>
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

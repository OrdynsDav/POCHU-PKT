import { Container, Skeleton, SkeletonLine } from "../../ui";
import styles from "./ApplicantsSkeleton.module.css";

export function ApplicantsSkeleton() {
    return (
        <Container>
            <div className={styles.content}>
                <div style={{ maxWidth: "48rem", width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem", margin: "0 auto 2.5rem", alignItems: "center" }}>
                    <SkeletonLine width="10rem" className={styles.skeletonBadge} backgroundColor={`var(--skeleton-line-bc)`} />
                    <SkeletonLine width="26rem" height="1.6rem" className={styles.skeletonTitle} backgroundColor={`var(--skeleton-line-bc)`} />
                    <div className={styles.skeletonDescriptionWrapper}>
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Skeleton key={idx} height="1.25rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`} />
                        ))}
                    </div>
                </div>
                <div className={styles.skeletonActions}>
                    <Skeleton height="3rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`} />
                    <Skeleton height="3rem" width="100%" backgroundColor={`var(--skeleton-line-bc)`} />
                </div>
                <div className={styles.skeletonBenefits}>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Skeleton key={idx} height="5.5rem" backgroundColor={`var(--skeleton-line-bc)`} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
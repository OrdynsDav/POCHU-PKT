import { Container, Skeleton, SkeletonLine } from "@/components/ui";
import styles from "./NewsSkeleton.module.css";

export function NewsSkeleton() {
    return (
        <Container>
            <div className={styles.inner}>
                <div style={{ maxWidth: "48rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: "0.75rem", margin: "0 auto" }}>
                    <SkeletonLine width="7rem" />
                    <SkeletonLine width="18rem" height="1.6rem" />
                    <SkeletonLine width="28rem" />
                </div>
                <div style={{ height: "1.5rem" }} />
                <div className={styles.skeletonList}>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className={styles.skeletonCard}>
                            <Skeleton className={styles.skeletonMedia} />
                            <div className={styles.skeletonBody}>
                                <SkeletonLine width="10rem" />
                                <SkeletonLine width="70%" height="1.3rem" />
                                <SkeletonLine width="95%" />
                                <SkeletonLine width="80%" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
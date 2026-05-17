import { Container, Skeleton, SkeletonLine } from "@/components/ui";
import styles from "./DepartmentsSkeleton.module.css";

export function DepartmentsSkeleton() {
    return (
        <Container>
            <div className={styles.inner}>
                <div style={{ maxWidth: "48rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: "0.75rem", margin: "0 auto" }}>
                    <SkeletonLine width="7rem" />
                    <SkeletonLine width="18rem" height="1.6rem" />
                    <SkeletonLine width="28rem" />
                </div>
                <div className={styles.skeletonGrid}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Skeleton key={idx} height="9.25rem" />
                    ))}
                </div>
            </div>
        </Container>
    );
}
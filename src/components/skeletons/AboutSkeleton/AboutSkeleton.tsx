import { Container, Skeleton, SkeletonLine } from "@/components/ui";
import styles from "./AboutSkeleton.module.css";

export function AboutSkeleton() {
    return (
        <Container>
          <div className={styles.aboutWrapper}>
            <div style={{ maxWidth: "48rem", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: "0.75rem", margin: "0 auto" }}>
              <SkeletonLine width="7rem"  />
              <SkeletonLine width="18rem" height="1.6rem"  />
              <SkeletonLine width="28rem"  />
            </div>
            <div className={styles.skeletonAboutInner}>
              <div className={styles.skeletonColumn}>
                <div className={styles.skeletonStats}>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Skeleton key={idx} height="7.5rem"  />
                  ))}
                </div>
                <Skeleton className={styles.skeletonQuote} height="6.25rem"  />
              </div>
              <div className={styles.skeletonColumn}>
                <SkeletonLine width="16rem" height="1.4rem"  />
                <div>
                  <SkeletonLine width="95%"  />
                  <div style={{ height: "0.5rem" }} />
                  <SkeletonLine width="80%"  />
                </div>
                <ul className={styles.skeletonFeatures} aria-hidden="true">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <li key={idx} className={styles.skeletonFeatureItem}>
                      <Skeleton className={styles.skeletonFeatureIcon}  />
                      <div className={styles.skeletonFeatureBody}>
                        <SkeletonLine width="60%"  />
                        <SkeletonLine width="100%"  />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
    );
}
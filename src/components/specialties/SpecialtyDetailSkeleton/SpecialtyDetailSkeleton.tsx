import { Skeleton, SkeletonLine } from "@/components/ui/Skeleton/Skeleton";
import styles from "./SpecialtyDetailSkeleton.module.css";

export function SpecialtyDetailSkeleton() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <SkeletonLine className={styles.titleLine} height="2.35rem" />
          <SkeletonLine className={styles.titleLineShort} height="2.35rem" />
        </div>
        <div className={styles.meta}>
          <Skeleton
            className={styles.iconPlaceholder}
            width="3.25rem"
            height="3.25rem"
            rounded="md"
          />
          <div className={styles.chips}>
            <SkeletonLine width="full" height="1.35rem" />
            <SkeletonLine width="full" height="1.35rem" />
          </div>
        </div>
      </div>

      <div className={styles.article}>
        <SkeletonLine width="42%" height="1.15rem" />
        <SkeletonLine width="100%" />
        <SkeletonLine width="100%" />
        <SkeletonLine width="96%" />
        <SkeletonLine width="88%" />
        <SkeletonLine width="100%" />
        <SkeletonLine width="72%" />
      </div>
    </div>
  );
}

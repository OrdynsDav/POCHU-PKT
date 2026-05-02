import Link from "next/link";
import styles from "./Breadcrumbs.module.css";
type BreadcrumbsProps = {
    items: {
        label: string;
        href?: string;
        isCurrent?: boolean;
    }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className={styles.nav} aria-label="Навигационная цепочка">
            <ul className={styles.list}>
                {items.map((item, idx) => (
                    <li
                        className={styles.item}
                        key={`${item.href ?? "current"}-${item.label}-${idx}`}
                    >
                        {!item.isCurrent ? (
                            <>
                                <Link className={styles.link} href={item.href ?? "#"}>{item.label}</Link>
                                <span className={styles.separator} aria-hidden>/</span>
                            </>
                        ) : (
                            <span className={styles.current}>{item.label}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
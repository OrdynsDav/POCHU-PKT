import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui";
import "./styles/global/not-found.css";

/** Сердце вместо «0» — как на референсе, в цветах техникума */
function HeartZero({ gradientId }: { gradientId: string }) {
  return (
    <div
      className="nf-heart"
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="nf-icon"
        role="img"
        aria-label="Иконка сердца"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2D26" />
            <stop offset="55%" stopColor="#9a3a32" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
      <span
        className="nf-number"
      >
        0
      </span>
    </div>
  );
}

export default function NotFound() {
  const gradId = "notfound-heart-fill";

  return (
    <section className="nf-page" aria-labelledby="not-found-title">
      <Container>
        <div className="nf-wrap">
          <p className="nf-lead">
            Страницу, которую вы ищете,{" "}
            <span className="nf-nowrap">найти не удалось.</span>
          </p>

          <h1 id="not-found-title" className="nf-sr-only">
            Ошибка 404 — страница не найдена
          </h1>

          <div className="nf-code-row" aria-hidden>
            <span className="nf-digit">4</span>
            <HeartZero gradientId={gradId} />
            <span className="nf-digit">4</span>
          </div>

          <p className="nf-description">
            Проверьте адрес в строке браузера или вернитесь на главную — там есть
            всё необходимое.
          </p>

          <Link href="/" className="nf-button">
            <ArrowLeft className="nf-button-icon" aria-hidden />
            На главную
          </Link>
        </div>
      </Container>
    </section>
  );
}

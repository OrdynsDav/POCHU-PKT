import "@/app/styles/styles.css";
import { Header, Footer } from "@/components/layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Псковский Кооперативный Техникум",
  alternateName: ["ПКТ", "ПОЧУ ПКТ", "Псковский кооперативный техникум"],
  description:
    "Профессиональное образовательное частное учреждение «Псковский кооперативный техникум» — качественное среднее профессиональное образование в Пскове. Специальности: экономика, право, IT, дизайн.",
  url: "https://pkt-pskov.ru",
  logo: "https://pkt-pskov.ru/images/logo.png",
  telephone: "+7 (8112) 75-38-82",
  email: "pskov-koop@yandex.ru",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Псков",
    addressRegion: "Псковская область",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: "Псков",
  },
  sameAs: ["https://vk.com/pkt_pskov", "https://t.me/pkt_pskov"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Специальности СПО",
    itemListElement: [
      {
        "@type": "Course",
        name: "Экономика и бухгалтерский учет",
        provider: {
          "@type": "EducationalOrganization",
          name: "ПКТ",
        },
      },
      {
        "@type": "Course",
        name: "Право и организация социального обеспечения",
        provider: {
          "@type": "EducationalOrganization",
          name: "ПКТ",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          ПКТ — Псковский Кооперативный Техникум | Колледж в Пскове | СПО
        </title>
        <meta
          name="description"
          content="Профессиональное образовательное частное учреждение «Псковский кооперативный техникум» — качественное среднее профессиональное образование (СПО) в Пскове. Колледж с современными специальностями: экономика, право, IT, дизайн. Поступление после 9 и 11 класса."
        />
        <meta
          name="keywords"
          content="колледж, техникум, колледж Псков, техникум Псков, СПО, СПО Псков, среднее профессиональное образование, ПКТ, Псковский кооперативный техникум, поступить в колледж, поступить в техникум, образование Псков, учеба в Пскове, специальности СПО, после 9 класса, после 11 класса, экономика, бухгалтерский учет, право, юриспруденция, IT специальности, дизайн"
        />
        <meta name="author" content="ПОЧУ ПКТ" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <link rel="canonical" href="https://pkt-pskov.ru" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pkt-pskov.ru" />
        <meta
          property="og:title"
          content="ПКТ — Псковский Кооперативный Техникум | Колледж в Пскове"
        />
        <meta
          property="og:description"
          content="Качественное среднее профессиональное образование в Пскове. Современные специальности, опытные преподаватели, трудоустройство выпускников."
        />
        <meta
          property="og:image"
          content="https://pkt-pskov.ru/images/og-image.jpg"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta
          property="og:site_name"
          content="Псковский Кооперативный Техникум"
        />

        {/* Telegram */}
        <meta property="telegram:channel" content="@pkt_pskov" />

        {/* VKontakte */}
        <meta property="vk:app_id" content="51511873" />
        <meta
          property="vk:image"
          content="https://pkt-pskov.ru/images/og-image.jpg"
        />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="RU-PSK" />
        <meta name="geo.placename" content="Псков" />
        <meta name="geo.position" content="57.8194;28.3324" />
        <meta name="ICBM" content="57.8194, 28.3324" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              history.scrollRestoration = 'manual';
              if (window.location.hash) {
                history.replaceState(null, '', location.pathname + location.search);
              }
              window.scrollTo(0, 0);
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo(0, 0);
              });
              window.addEventListener('load', function() {
                setTimeout(function() { window.scrollTo(0, 0); }, 0);
              });
            `,
          }}
        />
      </head>
      <body>
        <SpeedInsights />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-9999 focus-visible:hidden focus:px-4 focus:py-2 focus:bg-[#7B2D26] focus:text-white focus:rounded-lg"
        >
          Перейти к основному содержимому
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

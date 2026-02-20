export const siteConfig = {
  name: "Псковский Кооперативный Техникум",
  shortName: "ПКТ",
  description:
    "Профессиональное образовательное частное учреждение «Псковский кооперативный техникум»",
  url: "https://pkt-pskov.ru",

  contacts: {
    phone: "+7 (8112) 75-38-82",
    email: "pskov-koop@yandex.ru",
    address: "180000, г. Псков, ул. Калинина, 13",
  },

  social: {
    vk: "https://vk.com/pskovpkt",
    telegram: "https://t.me/pkt_pskov",
  },

  navLinks: [
    { id: 1, label: "Главная", href: "#hero" },
    { id: 2, label: "О техникуме", href: "#about" },
    { id: 3, label: "Отделения", href: "#departments" },
    { id: 4, label: "Новости", href: "#news" },
    { id: 5, label: "Поступление", href: "#applicants" },
    { id: 6, label: "Контакты", href: "#contacts" },
  ],

  cta: {
    label: "Поступить",
    href: "#applicants",
  },

  logo: {
    shortName: "ПКТ",
    href: "#hero",
  },
} as const;

export type SiteConfig = typeof siteConfig;

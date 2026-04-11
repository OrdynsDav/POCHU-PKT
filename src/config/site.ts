export const officialEducationSiteUrl = "https://pskovpkt.ru" as const;

export type MainNavChild = {
  id: string;
  label: string;
  href: string;
};

export type MainNavItem =
  | { id: string; label: string; href: string; children?: undefined }
  | { id: string; label: string; href?: undefined; children: readonly MainNavChild[] };

/**
 * Верхнее меню и подпункты в том же виде, что на основном сайте техникума.
 */
export const mainNavigation: readonly MainNavItem[] = [
  {
    id: "life",
    label: "Жизнь техникума",
    children: [
      { id: "history", label: "История техникума", href: `/life/history/` },
      {
        id: "schedule",
        label: "Расписание занятий",
        href: `/life/schedule/`,
      },
      {
        id: "bells",
        label: "Расписание звонков",
        href: `/life/call-schedule/`,
      },
      { id: "news", label: "Новости", href: `/life/news/` },
      { id: "announcing", label: "Объявления", href: `/life/announcing/` },
      { id: "reviews", label: "Отзывы", href: `/life/reviews/` },
    ],
  },
  {
    id: "about",
    label: "О техникуме",
    children: [
      { id: "basic", label: "Основные сведения", href: "/about/" },
      {
        id: "structure",
        label: "Структура и органы управления образовательной организацией",
        href: "/about/structure/",
      },
      {
        id: "documents",
        label: "Документы",
        href: "/about/documents/"
      },
      {
        id: "education",
        label: "Образование",
        href: "/about/education/"
      },
      {
        id: "standarts",
        label: "Образовательные стандарты и требования",
        href: "/about/educational-standarts",
      },
      {
        id: "management",
        label: "Руководство",
        href: "/about/management/"
      },
      {
        id: "staff",
        label: "Педагогический состав",
        href: "/about/teachers/",
      },
      {
        id: "mto",
        label: "Материально-техническое обеспечение и оснащённость образовательного процесса. Доступная среда",
        href: "/about/logistical-support/",
      },
      {
        id: "paid",
        label: "Платные образовательные услуги",
        href: "/about/service/",
      },
      {
        id: "finance",
        label: "Финансово-хозяйственная деятельность",
        href: "/about/financial/",
      },
      {
        id: "vacancies",
        label: "Вакантные места для приёма (перевода) обучающихся",
        href: "/about/career/",
      },
      {
        id: "support",
        label: "Стипендии и меры поддержки обучающихся",
        href: "/about/material-support/",
      },
      {
        id: "international",
        label: "Международное сотрудничество",
        href: "/about/international-cooperation/",
      },
      {
        id: "food",
        label: "Организация питания в образовательной организации",
        href: "/about/logistical-support/meals/",
      },
    ],
  },
  {
    id: "departments",
    label: "Отделения",
    children: [
      {
        id: "fulltime",
        label: "Очное отделение",
        href: `/departments/fulltime/`,
      },
      {
        id: "parttime",
        label: "Заочное отделение",
        href: `/departments/parttime/`,
      },
      {
        id: "extra",
        label: "Дополнительное образование",
        href: `/departments/additional/`,
      },
    ],
  },
  {
    id: "applicants",
    label: "Абитуриентам",
    children: [
      { id: "rules", label: "Правила приёма", href: `/applicants/` },
      {
        id: "commission",
        label: "Приёмная комиссия",
        href: `/applicants/inspection-board/`,
      },
      {
        id: "digits",
        label: "Контрольные цифры приёма",
        href: `/applicants/receiving-control-digits/`,
      },
      {
        id: "applicant-paid",
        label: "Платные образовательные услуги",
        href: `/about/service/`,
      },
      {
        id: "profor",
        label: "Профориентация",
        href: `/applicants/proforientatsiya/`,
      },
      {
        id: "specialties",
        label: "Специальности",
        href: `/applicants/specialties/`,
      },
      {
        id: "dorm",
        label: "Общежитие",
        href: `/about/material-support/dormitory`,
      },
    ],
  },
  {
    id: "students",
    label: "Студентам",
    children: [
      {
        id: "student-rules",
        label: "Правила внутреннего распорядка",
        href: `/students/`,
      },
      {
        id: "gia",
        label: "Государственная итоговая аттестация",
        href: `/students/gia/`,
      },
      {
        id: "employment",
        label: "Трудоустройство выпускников",
        href: `/about/material-support/employment`,
      },
      {
        id: "selfgov",
        label: "Студенческое самоуправление",
        href: `/students/student-government/`,
      },
      {
        id: "mentoring",
        label: "Наставничество",
        href: `/students/training-part`,
      },
      { id: "stu-news", label: "Новости", href: `/students/news/` },
      {
        id: "stu-announcing",
        label: "Объявления",
        href: `/students/announcing/`,
      },
      {
        id: "sport",
        label: "Студенческий спортивный клуб",
        href: `/news/sport-life/`,
      },
    ],
  },
  {
    id: "contacts",
    label: "Контакты",
    children: [
      { id: "contacts-main", label: "Контакты учреждения", href: `/contacts/` },
      { id: "requisites", label: "Реквизиты", href: `/contacts/requisites/` },
    ],
  },
] as const;

export const siteConfig = {
  name: "Псковский Кооперативный Техникум",
  shortName: "ПКТ",
  description:
    "Профессиональное образовательное частное учреждение «Псковский кооперативный техникум»",
  url: "https://pochu-pkt.vercel.app",

  contacts: {
    phone: "+7 (8112) 75-38-82",
    email: "pskov-koop@yandex.ru",
    address: "180000, г. Псков, ул. Калинина, 13",
  },

  social: {
    vk: "https://vk.com/pskovpkt",
    telegram: "https://t.me/pkt_pskov",
  },

  logo: {
    shortName: "ПКТ",
    href: "/",
  },
} as const;

export type SiteConfig = typeof siteConfig;

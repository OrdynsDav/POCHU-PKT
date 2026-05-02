/** Элементы блока `relatedDocuments` в specialties-content.json */
export type SpecialtyDocumentLink = {
  label: string;
  url: string;
};

/**
 * Блок текста специальности. Порядок в массиве `blocks` задаёт порядок на странице.
 * Ровно одно из текстовых полей или списков заполнено (кроме комбинаций title + следующий блок).
 */
export type SpecialtyContentBlock = {
  role: string;
  text?: string;
  lines?: string[];
  paragraphs?: string[];
  /** Строки списка или ссылки на документы (блок relatedDocuments) */
  items?: string[] | SpecialtyDocumentLink[];
};

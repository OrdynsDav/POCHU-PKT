import { Container } from "@/components/ui/Container/Container";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";
import {
  PdfAttachmentsSection,
  type PdfAttachmentItem,
} from "@/components/ui/pdfDownloadLink/PdfDownloadLink";

const TEACHER_ATTESTATION_DOCUMENTS: PdfAttachmentItem[] = [
  {
    file: 'Приказ от 4 апреля 2014г. N 276 "Об утверждении порядка проведения аттестации педагогических работников организации, осуществляющих образовательную деятельность"',
    href: "https://pskovpkt.ru/upload/iblock/558/5589218aa221278c44984948a5e55c43.doc",
  },
  {
    file: 'Нормативные правовые акты, "Разъяснения по применению порядка проведения аттестации педагогических работников организации, осуществляющих образовательную деятельность (ответы на вопросы), переписка по вопросам аттестации"',
    href: "https://pskovpkt.ru/upload/iblock/315/31511bb0118f5a22157453492a717a1b.doc",
  },
  {
    file: "Заявление на аттестацию",
    href: "https://pskovpkt.ru/upload/iblock/4bb/4bb0c32dcb2edb2f12f10c2bae104e35.doc",
  },
  {
    file: "Методические рекомендации",
    href: "https://pskovpkt.ru/upload/iblock/271/2712c02faead648b6c2f59d448da271f.doc",
  },
  {
    file: "Образцы заявления",
    href: "https://pskovpkt.ru/upload/iblock/b38/b3813ac6d45c172e86d1fdaef40da648.docx",
  },
  {
    file: "Содержание портфолио на высшую категорию",
    href: "https://pskovpkt.ru/upload/iblock/429/42909b58bf089779a85957976e57c4e0.docx",
  },
  {
    file: "Содержание портфолио на первую категорию",
    href: "https://pskovpkt.ru/upload/iblock/fcf/fcfd70f279044e5041ee750510ed5e96.docx",
  },
  {
    file: "Экспертное заключение",
    href: "https://pskovpkt.ru/upload/iblock/de4/de43410f08abe0abb1b5c614c86d1c14.doc",
  },
];

export default function TeachersPage() {
  return (
    <section className="page">
      <Container>
        <PageTitle title="Аттестации" />
        <PdfAttachmentsSection items={TEACHER_ATTESTATION_DOCUMENTS} />
      </Container>
    </section>
  );
}
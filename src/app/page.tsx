import {
  Hero,
  About,
  Departments,
  News,
  Applicants,
} from "@/components/sections";
import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Departments />
      <News />
      <Applicants />
    </>
  );
}

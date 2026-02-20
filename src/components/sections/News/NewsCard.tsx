import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

export function NewsCard({ link, image, title, date, excerpt }: NewsCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col"
    >
      <div className="relative h-72.5 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 672px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={95}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#3D1518]/30 to-transparent" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-sm text-[#6B4C3B] mb-3">
          <Calendar className="w-4 h-4 text-[#D4A574]" />
          {date}
        </div>
        <h3 className="font-bold text-[#3D1518] mb-2 group-hover:text-[#DC2626] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-auto text-sm text-[#6B4C3B] line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}

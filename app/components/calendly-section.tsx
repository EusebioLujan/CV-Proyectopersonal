"use client";

import { Calendar } from "lucide-react";
import { useTranslations } from "../hooks/use-translations";
import Link from "next/link";

export function CalendlySection() {
  const { t } = useTranslations();

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <div className="text-xs uppercase tracking-widest text-center mb-2">
        {t("meeting.announcement")}
      </div>
      <h2 className="text-center text-xl font-bold mb-2 newspaper-heading font-playfair">
        {t("meeting.title")}
      </h2>
      <div className="vintage-stamp mb-3">{t("meeting.urgent")}</div>
      <p className="text-sm mb-4 italic text-center">{t("meeting.content")}</p>
      <div className="flex items-center justify-center mb-4">
        <Calendar className="h-5 w-5 mr-2" />
        <span className="font-bold">{t("meeting.available")}</span>
      </div>
      <Link
        className="flex justify-center items-center text-center"
        href={"/meeting"}
        prefetch={false}
      >
        <span className="w-full py-2 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors">
          {t("meeting.button")}
        </span>
      </Link>
    </div>
  );
}

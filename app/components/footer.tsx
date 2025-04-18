"use client";

import { useTranslations } from "../hooks/use-translations";

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="border-t-2 border-gray-800 py-4 px-6 text-center text-sm bg-old-paper-dark mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div>{t("footer.copyright")}</div>
        </div>
      </div>
    </footer>
  );
}

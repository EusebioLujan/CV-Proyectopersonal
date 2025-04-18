"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/language-context";
import { Switch } from "@/components/ui/switch";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Image
        src={language === "es" ? "/argentina.png" : "/estados-unidos.png"}
        alt={language === "es" ? "Español" : "English"}
        width={24}
        height={16}
        className="opacity-100"
      />
      <Switch
        checked={language === "en"}
        onCheckedChange={(checked: boolean) =>
          setLanguage(checked ? "en" : "es")
        }
        className="bg-blue-600 [&[data-state='unchecked']]:bg-blue-600 data-[state=checked]:bg-blue-600 [&>span]:bg-white"
      />
    </div>
  );
}

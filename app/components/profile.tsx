'use client'

import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { useTranslations } from "../hooks/use-translations"

export function Profile() {
  const { t } = useTranslations()

  return (
    <div className="border border-gray-800 p-4 bg-old-paper-light">
      <h2 className="text-center text-2xl font-bold mb-4 newspaper-heading font-playfair">
        {t('profile.title')}
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <div className="relative">
            <Image
              src="/profile-placeholder.jpg"
              alt="Eugenia Gramajo"
              width={200}
              height={200}
              className="grayscale border-2 border-gray-800"
            />
            <div className="absolute -bottom-2 -right-2 bg-old-paper-light border border-gray-800 px-2 py-1 text-xs rotate-[-5deg]">
              Photograph by Studio Moderno
            </div>
          </div>
        </div>
        <div className="md:w-2/3 space-y-2 text-sm leading-tight text-justify">
          <p className="first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none">
            {t('profile.description')}
          </p>
          <p>
            {t('profile.description2')}
          </p>
          <div className="flex justify-end">
            <div className="flex space-x-2 mt-2">
              <Link
                href="#"
                className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-1 bg-gray-800 text-white rounded-full hover:bg-gray-700"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
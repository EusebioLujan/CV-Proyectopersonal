'use client'

import Link from "next/link"
import { useTranslations } from "../hooks/use-translations"

export function Navigation() {
  const { t } = useTranslations()

  const leftNavItems = [
    { key: 'home', label: t('navigation.home'), href: '/' },
    { key: 'projects', label: t('navigation.projects'), href: '/projects' },
    { key: 'experience', label: t('navigation.experience'), href: '/experience' },
    { key: 'certificates', label: t('navigation.certificates'), href: '/certificates' },
    { key: 'blog', label: t('navigation.blog'), href: '/blog' }
  ]

  const rightNavItems = [
    { key: 'contact', label: t('navigation.contact'), href: '/contact' },
    { key: 'playground', label: t('navigation.playground'), href: '/playground' }
  ]

  return (
    <nav className="bg-gray-800 text-white border-b border-gray-600">
      <div className="max-w-7xl mx-auto flex justify-between px-6">
        <ul className="flex">
          {leftNavItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="block px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex">
          {rightNavItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="block px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

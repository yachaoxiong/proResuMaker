'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLinks() {
  const pathname = usePathname()
  const name = pathname.split('/')[1] || 'dashboard'
  const navbarLinks = [
    { name: 'Dashboard', href: '/' },
    { name: 'Templates', href: '/templates' },
    { name: 'applications', href: '/applications' },
    { name: 'Settings', href: '/settings' },
  ]

  return (
    <ul className="flex gap-8">
      {navbarLinks.map((link) => (
        <li
          key={link.name}
          className={`text-lg  sm:text-md md:text-xl relative ${
            name === link.name.toLowerCase()
              ? "text-gray-900 font-semibold  h-full after:content-[''] after:w-full after:h-1 after:absolute after:bottom-[-32.5px] after:left-0 after:bg-gray-900 after:transition-all after:duration-900 after:ease-in-out"
              : 'font-medium text-gray-500 after:w-0 after:h-0'
          }`}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navbarLinks, userLinks } from '@/data/navLinks'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { HiMiniXMark } from 'react-icons/hi2'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Separator } from '@/components/ui/separator'

export default function NavLinks() {
  const router = useRouter()
  const pathname = usePathname()
  const name = pathname.split('/')[1] || 'dashboard'
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (open) {
      window.onclick = () => setOpen(false)
    }
  }, [open])

  // Sign out function
  const signOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    return router.refresh()
  }
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="absolute right-8 top-8 cursor-pointer lg:hidden w-12 h-12 text-3xl z-[11]"
      >
        {open ? (
          <HiMiniXMark className="text-gray-100" />
        ) : (
          <HiOutlineMenuAlt3 />
        )}
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? 'block' : 'hidden'
        } lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[1] `}
      ></div>
      <ul
        className={`lg:flex lg:items-center lg:pb-0  absolute lg:static h-full bg-white  top-0 lg:z-auto z-[1]  sm:w-2/3 md:w-2/5 lg:w-auto lg:px-0 px-9 transition-all duration-500 ease-in ${
          open ? 'left-[0px]' : 'left-[-100%]'
        }`}
      >
        <Image
          src="/images/logo-transparent-png.png"
          alt="logo"
          height={80}
          width={260}
          className="lg:hidden pt-6"
        />
        {navbarLinks.map((link) => (
          <li
            key={link.name}
            className={`text-lg sm:text-md lg:text-xl relative lg:ml-8  font-semibold 
            hover:bg-gray-200 rounded-lg 
            lg:hover:bg-transparent
            transition-all duration-300 ease-in-out p-2 
            ${
              name === link.name.toLowerCase()
                ? "lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:absolute lg:after:bottom-[-32.5px] lg:after:left-0 lg:after:bg-gray-900 lg:after:transition-all lg:after:duration-900 lg:after:ease-in-out text-gray-900 font-semibold "
                : 'font-medium text-gray-500 lg:after:w-0 lg:after:h-0'
            }`}
          >
            <div className="flex items-center gap-2">
              {link.icon && link.icon}
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </div>
          </li>
        ))}
        <Separator className="my-4 lg:hidden" />
        {userLinks.map((link) => (
          <li
            key={link.name}
            className={`text-lg sm:text-md lg:text-xl relative lg:ml-8  font-semibold 
            hover:bg-gray-200 rounded-lg 
            lg:hover:bg-transparent
            transition-all duration-300 ease-in-out p-2 
             lg:hidden
            ${
              name === link.name.toLowerCase()
                ? "lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:absolute lg:after:bottom-[-32.5px] lg:after:left-0 lg:after:bg-gray-900 lg:after:transition-all lg:after:duration-900 lg:after:ease-in-out text-gray-900 font-semibold "
                : 'font-medium text-gray-500 lg:after:w-0 lg:after:h-0'
            }`}
          >
            {link.isButton ? (
              <div className="flex items-center gap-2">
                {link.icon && link.icon}
                <button
                  onClick={signOut}
                  className={`text-lg sm:text-md md:text-xl relative font-semibold`}
                >
                  {link.name}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {link.icon && link.icon}
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'
import NavLinks from './NavLinks'
import NavAvatar from './NavAvatar'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className="border-b w-full py-6 flex gap-6 px-6 lg:justify-around lg:items-center">
      <div className="items-center gap-6 flex">
        <Image
          src="/images/logo-transparent-png.png"
          alt="logo"
          height={80}
          width={260}
        />
        <NavLinks />
      </div>
      <div className="hidden lg:block">
        <ul className="flex space-x-4">
          <li>
            <NavAvatar />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

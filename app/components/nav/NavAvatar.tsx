import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IoPersonCircle } from 'react-icons/io5'
import { IoIosHelpCircle } from 'react-icons/io'
import { IoLogOut } from 'react-icons/io5'
import { Separator } from '@/components/ui/separator'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import SignOutButton from './SignOutButton'
import Link from 'next/link'

export default function NavAvatar() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="/images/default-avatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-100 mt-3">
        <ul className="flex flex-col ">
          <li>
            <Link
              href="/account"
              className="flex items-center gap-6 p-2 font-medium hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <IoPersonCircle className="text-3xl" />
              Account
            </Link>
          </li>
          <li>
            <Link
              href="/help"
              className="flex items-center gap-6 p-2 mb-2 font-medium hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <IoIosHelpCircle className="text-3xl" />
              Help & support
            </Link>
          </li>
          <Separator />
          <li>
            <div className="flex items-center gap-6 p-2 mt-2 font-medium hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer">
              <IoLogOut className="text-3xl" />
              <SignOutButton />
            </div>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}

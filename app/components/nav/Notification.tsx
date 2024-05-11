import React from 'react'
import { IoNotifications } from 'react-icons/io5'
import { Separator } from '@/components/ui/separator'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '@/components/ui/popover'
import { FaCircleInfo } from 'react-icons/fa6'

export default function Notification() {
  const notifications = [
    {
      id: 1,
      title: 'New message from Jane',
      description: 'Hey, how are you doing?',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'New message from Jane',
      description: 'Hey, how are you doing?',
      time: '2 hours ago',
      read: false,
    },
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer text-gray hover:bg-gray-100 p-2 rounded-full transition-all duration-300 relative">
          <IoNotifications className="text-3xl" />
          {!!notifications.length && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium rounded-full w-2 h-2 flex items-center justify-center"></div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-100 mt-3">
        <ul className="flex flex-col ">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <PopoverClose asChild>
                <div className="flex gap-2 hover:bg-gray-100 rounded-lg transition-all duration-300 px-6 py-2 m-2 cursor-pointer">
                  <div className="flex items-center">
                    <FaCircleInfo className="text-xl" />
                  </div>
                  <div className="flex items-center gap-6 font-medium ">
                    <div>
                      <h3 className="text-lg">{notification.title}</h3>
                      <p className="text-sm text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              </PopoverClose>
              <Separator />
            </li>
          ))}
          <PopoverClose asChild>
            <div className="flex items-center gap-6 p-2 mt-2 font-medium  cursor-pointer">
              <p className="text-center w-full">Clear all</p>
            </div>
          </PopoverClose>
        </ul>
      </PopoverContent>
    </Popover>
  )
}

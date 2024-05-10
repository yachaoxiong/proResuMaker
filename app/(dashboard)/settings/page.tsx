'use client'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'

export default function Settings() {
  const { user } = useAppSelector((state) => state.auth)

  console.log('user', user)
  console.log('i am client setting page')
  return <div>Settings</div>
}

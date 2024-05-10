import React from 'react'
import NavBar from './Navbar'
import { createClient } from '@/utils/supabase/server'

export default async function HeaderContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div>
      <NavBar />
      {children}
    </div>
  ) : (
    <div>{children}</div>
  )
}

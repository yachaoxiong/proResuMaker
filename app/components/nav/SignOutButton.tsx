import React from 'react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default function SignOutButton() {
  const signOut = async () => {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <form action={signOut}>
      <button type="submit" className="outline-none">
        Sign Out
      </button>
    </form>
  )
}

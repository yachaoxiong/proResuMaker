import React from 'react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function SignOutButton() {
  const signOut = async () => {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <form action={signOut}>
      <Button type="submit" variant="secondary">
        Sign Out
      </Button>
    </form>
  )
}

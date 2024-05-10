import React from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import NavLinks from './NavLinks'
import NavAvatar from './NavAvatar'
const NavBar = () => {
  const signOut = async () => {
    'use server'
    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/login')
  }
  return (
    <nav className="border-b w-full py-6 flex gap-6 px-6 justify-around items-center">
      <div className="flex items-center gap-6">
        <h1>ProResuMaker</h1>
        <NavLinks />
      </div>
      <div>
        <ul className="flex space-x-4">
          {/* <li>
            <form action={signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </li> */}
          <li>
            <NavAvatar />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

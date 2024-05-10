'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from './../../redux/hooks'
import { login } from '@/redux/slices/authSlice'

export default function Login({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signIn = async () => {
    const supabase = createClient()

    const data = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    const { error } = data
    const user = data.data.user
    if (error) {
      return router.push('/login?message=Could not authenticate user')
    }
    const updatedUser = {
      id: user?.id as string,
      name: user?.user_metadata.full_name || user?.email,
      email: user?.email || '',
    }
    dispatch(login(updatedUser))
    router.push('/')
    return router.refresh()
  }
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>
      <label htmlFor="email" className="text-md">
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password" className="text-md">
        Password
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="password"
        name="password"
        placeholder="••••••••"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
        onClick={signIn}
      >
        Sign In
      </Button>
      {error && (
        <p className="mt-4 p-4 bg-red-100 text-red-600 text-center">{error}</p>
      )}
      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </div>
  )
}

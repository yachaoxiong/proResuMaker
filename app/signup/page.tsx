import Link from 'next/link'
import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Title from '../components/common/Title'
import Input from '../components/common/Input'

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const signUp = async (formData: FormData) => {
    'use server'

    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      return redirect('/signup?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col w-4/5 md:w-2/5 lg:w-1/5 gap-4'>
        {/* header */}
        <div className='flex flex-col gap-6'>
          <Title title='ProResuMaker' />
          <Title
            title='Join our community'
            boldTitle
            subTitle='Start your journey with our product'
            titleFontSize='text-xl'
          />
        </div>
        <form
          className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-foreground font-serif"
          action={signUp}
        >
          <div className='flex flex-col gap-2'>
            <label className="text-md" htmlFor="email">
              Name*
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className="text-md" htmlFor="email">
              Email*
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className="text-md" htmlFor="password">
              Password*
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className="text-md" htmlFor="password">
              Confirm Password*
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              required
            />
          </div>
          <div className='text-xs text-right'>Forgot your password?</div>
          <Button type="submit">Sign Up</Button>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

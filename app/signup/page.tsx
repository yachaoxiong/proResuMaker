import Link from 'next/link'
import Image from 'next/image'
import { headers } from 'next/headers'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Title from '../components/common/Title'
import Input from '../components/common/AppInput'
import AppInput from '../components/common/AppInput'

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
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      return redirect('/signup?message=Passwords do not match');
    }

    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })
    console.log('error', error)
    if (error) {
      return redirect('/signup?message=Could not authenticate user')
    }

    return redirect('/login?message=Check email to continue sign in process')
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col w-4/5 md:w-2/5 lg:w-1/5 gap-4'>
        {/* header */}
        <div className='flex flex-col gap-3'>
          <Image
            src="/images/logo-transparent-png.png"
            alt="logo"
            width={360}
            height={200}
          />
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
          {/* <AppInput
            title="Name:"
            placeholder="Your name"
            required={true}
            name='name'
          /> */}
          <AppInput
            title="Email:"
            placeholder="you@example.com"
            required={true}
            name='email'
          />
          <AppInput
            title="Password:"
            placeholder="********"
            required={true}
            name='password'
            type="password"
          />
          <AppInput
            title="Confirm Password:"
            placeholder="********"
            required={true}
            name='confirmPassword'
            type="password"
          />
          <Button type="submit">Sign Up</Button>
          <div className="text-sm text-center">
            Already have an account?{' '}
            <Link href="/login" className=" text-blue-600">
              Sign In
            </Link>
          </div>
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

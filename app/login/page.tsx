'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { useAppDispatch } from './../../redux/hooks'
import MyInput from '@/app/components/common/MyInput';
import { login } from '@/redux/slices/authSlice'
import Title from '../components/common/Title'

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
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col w-4/5 md:w-2/5 lg:w-1/5 gap-4'>
        {/* header */}
        <div className='flex flex-col gap-6'>
          <Title title='ProResuMaker' />
          <Title
            title='Sign in to your account'
            boldTitle
            subTitle='Start your demo version'
            titleFontSize='text-xl'
          />
        </div>
        {/* input fields */}
        <MyInput
          title='Email:'
          placeHolder='you@example.com'
          required={true}
          onChange={(value) => setEmail(value)}
        />
        <MyInput
          title='Password:'
          type='password'
          placeHolder='••••••••'
          required={true}
          onChange={(value) => setPassword(value)}
        />
        <div className='flex flex-row justify-between'>
          <div className="flex items-center space-x-2">
            <input type='checkbox' />
            <label
              className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <div className='text-xs'>Forgot your password?</div>
        </div>
        <Button
          className='text-white rounded-md px-4 py-2 mb-2'
          onClick={signIn}
        >
          Sign In
        </Button>
        <div className='text-sm text-center'>
          Don’t have an account? <Link href='/signup' className=' text-blue-600'>Sign up</Link>
        </div>
        <div className='flex flex-row justify-evenly items-center'>
          <div className='h-[1px] bg-slate-300 w-5/12'></div>
          <div className='w-2/12 text-center text-xs'>Or</div>
          <div className='h-[1px] bg-slate-300 w-5/12'></div>
        </div>
        <Button
          variant="outline"
          className='rounded-md px-4 py-2 mb-2'
        >
          <Image
            className='mr-2'
            src="/images/googleIcon.png"
            alt="googleIcon"
            width={20}
            height={20}
          />
          Sign in with Google
        </Button>
        {/* error messages */}
        {error && (
          <p className="mt-4 p-4 bg-red-100 text-red-600 text-center">{error}</p>
        )}
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </div>
    </div>
  )
}

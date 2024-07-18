'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tkP9YWghZfj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import { login } from './actions'
import { createClient } from "@/utils/supabase/client"


export default function Component() {
  const googleLogin = async () => {
    const supabase = createClient()

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://localhost:3000/account/dashboard`,
      },
    })
  }
  return (
    <div className="mx-auto flex max-w-[480px] flex-col items-center justify-center space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-muted-foreground">Enter your credentials to access your account.</p>
      </div>
      <div className="w-full space-y-4">
      <form>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="name@example.com" className="mt-1" required/>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name='password' placeholder="••••••••" className="mt-1" required/>
        </div>
        <Button className="w-full mt-6" formAction={login}>Login</Button>
        </form>
      </div>
      <Separator className="w-full" />
      <div className="w-full space-y-4">
        <Button variant="outline" className="w-full">
          <GithubIcon className="mr-2 h-4 w-4" />
          Sign in with GitHub
        </Button>
        <Button onClick={() => googleLogin()} variant="outline" className="w-full">
          <ChromeIcon className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/register" className="underline" prefetch={false}>
          Sign up
        </Link>
      </div>
    </div>
  )
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
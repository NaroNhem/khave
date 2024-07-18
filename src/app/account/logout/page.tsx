'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fU7l1pTSWGq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
import signOut from "./actions"

export default function Component() {
  

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Thank you for using our app!
        </h1>
        <p className="mt-4 text-muted-foreground">
          We hope you found our application useful. Feel free to come back anytime.
        </p>
        <div className="mt-6">
            <Button
            variant='outline'
                onClick={() => signOut()}
                className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors focus:outline-none "
            >
                Logout
            </Button>
        </div>
      </div>
    </div>
  )
}
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>  
          <header className='flex justify-between p-3 bg-slate-100 mb-3'>
            <nav>
              <Link className='p-1 hover:underline' href={'/'}>
                Home
              </Link>
              <Link className='p-1 hover:underline' href={'/pricing'}>
                Pricing
              </Link>
            </nav>
            <div>
              <SignedIn>
                <div className='flex items-center'>
                  <Link href='/dashboard' className='mr-2 '>Dashboard</Link>
                  <UserButton afterSignOutUrl='/' />
                </div>
              </SignedIn>
              <SignedOut>
                <Link className='p-1 hover:underline' href={'/sign-in'}>
                  Sign in
                </Link>
              </SignedOut>
            </div>
          </header>
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

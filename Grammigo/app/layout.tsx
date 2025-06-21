import type { Metadata } from 'next'
import './globals.css'
import '../styles/clerk-glassmorphism.css'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: 'Gramigo',
  description: 'Farm equipment rental platform',
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  themeColor: '#a3c86d',
}

// Custom appearance for Clerk components
const clerkAppearance = {
  variables: {
    colorPrimary: "#a3c86d",
  },
  elements: {
    // Hide branding
    footer: "hidden",
    footerAction: "hidden",
    userButtonPopoverFooter: "hidden",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <header className="p-4 flex justify-between items-center border-b">
            <div className="text-xl font-bold">Gramigo</div>
            <div>
              <SignedOut>
                <div className="flex space-x-4">
                  <SignInButton mode="modal" />
                  <SignUpButton mode="modal" />
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  userProfileMode="modal"
                  afterSignOutUrl="/"
                />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

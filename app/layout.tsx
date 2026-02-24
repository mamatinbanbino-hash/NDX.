import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/app/globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'NDX.A - Intelligence Universelle',
  description: 'Expertise mondiale par Ndiaye Adama',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground">
        {/* SIGNATURE SIGNATURE NDIAYE ADAMA */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.75rem',
          color: '#00a8ff',
          letterSpacing: '4px',
          zIndex: 9999,
          pointerEvents: 'none',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          BY NDIAYE ADAMA
        </div>

        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

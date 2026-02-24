import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NDX.A - Intelligence Universelle',
  description: 'Expertise par Ndiaye Adama',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div style={{
          position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
          fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#00a8ff',
          letterSpacing: '3px', zIndex: 9999, pointerEvents: 'none', fontWeight: 'bold'
        }}>
          BY NDIAYE ADAMA
        </div>
        {children}
      </body>
    </html>
  )
}

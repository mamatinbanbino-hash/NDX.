
import { Metadata } from 'next'
import '@/app/globals.css'

// C'est ici qu'on change le nom "Chatbot" en NDX.A
export const metadata: Metadata = {
  title: 'NDX.A - Intelligence Universelle',
  description: 'Expertise mondiale par Ndiaye Adama',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ position: 'relative' }}>
        {/* TA SIGNATURE VISIBLE DANS TA VIDÉO */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.8rem',
          color: '#00a8ff',
          letterSpacing: '3px',
          zIndex: 9999,
          pointerEvents: 'none',
          fontWeight: 'bold'
        }}>
          BY NDIAYE ADAMA
        </div>

        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

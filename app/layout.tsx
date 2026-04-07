import { CartProvider } from '@/context/CartContext' // 1. On importe la borne Wi-Fi
import './globals.css' // Tes styles habituels

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {/* 2. On entoure TOUT le contenu de l'app avec le Provider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
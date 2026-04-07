'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// 1. On définit la forme de nos données
type CartContextType = {
  count: number
  addToCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// 2. Le "Provider" (Celui qui diffuse l'info)
export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)
  const addToCart = () => setCount((prev) => prev + 1)

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

// 3. Le "Hook" (Pour utiliser l'info facilement)
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart doit être utilisé dans un CartProvider")
  return context
}
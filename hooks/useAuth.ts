import { useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState<string | null>(null)

  // Fonction pour se connecter
  const login = (name: string) => setUser(name)

  // Fonction pour se déconnecter
  const logout = () => setUser(null)

  // On renvoie l'état et les deux fonctions (l'outil complet)
  return { user, login, logout, isConnected: !!user }
}
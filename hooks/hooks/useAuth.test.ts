import { renderHook, act } from '@testing-library/react'
import { useAuth } from '../useAuth'

describe('Jour 8 : Test du Hook useAuth', () => {
  
  test('doit connecter et déconnecter un utilisateur', () => {
    // 1. On sort notre outil de la boîte
    const { result } = renderHook(() => useAuth())

    // Au début, personne n'est connecté
    expect(result.current.user).toBe(null)

    // 2. On simule la connexion (on utilise "act" pour les actions qui changent l'état)
    act(() => {
      result.current.login('Murei')
    })

    expect(result.current.user).toBe('Murei')
    expect(result.current.isConnected).toBe(true)

    // 3. On simule la déconnexion
    act(() => {
      result.current.logout()
    })

    expect(result.current.user).toBe(null)
  })
})
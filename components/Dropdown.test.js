import { render, screen, fireEvent } from '@testing-library/react'
import Dropdown from './Dropdown'

describe('Jour 9 : Test Accessibilité du Dropdown', () => {

  test('doit changer l état aria-expanded quand on clique', () => {
    render(<Dropdown />)
    
    // 1. On trouve le bouton par son rôle et son nom (c'est très précis !)
    const bouton = screen.getByRole('button', { name: /Options du compte/i })
    
    // Au début, il est fermé
    expect(bouton).toHaveAttribute('aria-expanded', 'false')

    // 2. On clique
    fireEvent.click(bouton)

    // Maintenant, il doit être ouvert
    expect(bouton).toHaveAttribute('aria-expanded', 'true')
    
    // 3. On vérifie que la liste (menu) est bien apparue avec le bon rôle
    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()
  })
})
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('Jour 3 : Test de la barre de recherche', () => {
  
  test('doit changer le texte quand on tape au clavier', () => {
    render(<SearchBar />)

    const maBoite = screen.getByPlaceholderText(/Rechercher/i)
    fireEvent.change(maBoite, { target: { value: 'Stark' } })

    expect(screen.getByText(/Vous cherchez : Stark/i)).toBeInTheDocument()
  })
  
})
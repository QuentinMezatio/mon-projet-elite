import { render, screen, fireEvent } from '@testing-library/react'
import { CartProvider } from '@/context/CartContext' // Vérifie que le chemin @/context est correct
import { useCart } from '@/context/CartContext'

// On crée un petit composant de test interne
const TestComponent = () => {
  const { count, addToCart } = useCart()
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={addToCart}>Ajouter</button>
    </div>
  )
}

test('le total du panier doit augmenter de 1 après un clic', () => {
  render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  )

  // 1. On récupère le bouton
  const button = screen.getByText('Ajouter')
  
  // 2. On clique dessus
  fireEvent.click(button)

  // 3. On vérifie que le compteur est passé à 1
  const countDisplay = screen.getByTestId('count')
  expect(countDisplay).toHaveTextContent('1')
})
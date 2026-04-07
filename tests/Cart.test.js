import { render, screen, fireEvent } from '@testing-library/react'
import { CartProvider, useCart } from '@/context/CartContext'

const TestComponent = () => {
  const { count, addToCart } = useCart()
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={addToCart}>Ajouter</button>
    </div>
  )
}

test('le total doit augmenter partout', () => {
  render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  )

  const button = screen.getByText('Ajouter')
  fireEvent.click(button)

  expect(screen.getByTestId('count')).toHaveTextContent('1')
})
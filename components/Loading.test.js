import { render } from '@testing-library/react'
import Skeleton from './Skeleton'

test('doit afficher le squelette de chargement', () => {
  const { container } = render(<Skeleton />)
  
  // On cherche directement la div qui a la classe d'animation
  const skeleton = container.querySelector('.animate-pulse')
  
  expect(skeleton).toBeInTheDocument()
  expect(skeleton).toHaveClass('bg-gray-200')
})
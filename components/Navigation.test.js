import { render, screen } from '@testing-library/react'
// On importe un outil pour simuler les liens
import Link from 'next/link' 

describe('Jour 6 : Test de Navigation', () => {
  
  test('doit diriger vers la bonne URL quand on clique sur un lien', () => {
    render(
      <Link href="/blog/mon-article">
        Lire l&apos;article
      </Link>
    )

    const lien = screen.getByText(/Lire l'article/i)
    
    // On vérifie que le lien pointe vers la bonne destination
    expect(lien.getAttribute('href')).toBe('/blog/mon-article')
  })
})
import { render, screen } from '@testing-library/react'
import ProfileCard from './ProfileCard'

describe('Jour 1 : ProfileCard', () => {
  test('doit afficher correctement le nom et le rôle passés en props', () => {
    // On simule l'affichage du composant
    render(<ProfileCard name="Stark" role="Développeur Next.js" />)

    // On cherche le texte à l'écran (ignorant la casse avec /.../i)
    const nameElement = screen.getByText(/Stark/i)
    const roleElement = screen.getByText(/Développeur/i)

    // On vérifie qu'ils sont bien présents dans le "DOM" virtuel
    expect(nameElement).toBeInTheDocument()
    expect(roleElement).toBeInTheDocument()
  })

  test('doit conserver le rendu avec un snapshot', () => {
    const { asFragment } = render(
      <ProfileCard name="Stark" role="Développeur Next.js" />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
import { render, screen, waitFor } from '@testing-library/react'
import ArticleList from './ArticleList'

const mockArticles = [
  { id: 1, title: "Mon premier article" },
  { id: 2, title: "Mon deuxième article" }
];

test('doit afficher les articles après avoir reçu les données', async () => {
  // On remplace le vrai Internet par nos faux articles
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockArticles),
    })
  );

  // On dessine le composant
  render(<ArticleList />);

  // On attend que les articles soient chargés et affichés
  await waitFor(() => {
    expect(screen.getByText(/Mon premier article/i)).toBeInTheDocument();
  });
});
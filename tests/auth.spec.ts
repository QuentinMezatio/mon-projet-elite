import { test, expect } from '@playwright/test';

test('L utilisateur peut s inscrire et voir son profil', async ({ page }) => {
  // 1. On va sur l'application (assure-toi que ton "npm run dev" tourne !)
  await page.goto('http://localhost:3000');

  // 2. On remplit le formulaire d'inscription
  const emailInput = page.getByPlaceholder(/votre@email.com/i);
  await emailInput.fill('elite@test.com');

  // 3. On clique sur s'inscrire
  await page.getByRole('button', { name: /S'inscrire/i }).click();

  // 4. On vérifie que le message de succès apparaît
  await expect(page.getByText(/Merci/i)).toBeVisible();

  // 5. On teste le dropdown pour finir
  await page.getByRole('button', { name: /Options du compte/i }).click();
  await expect(page.getByRole('menuitem', { name: /Mon Profil/i })).toBeVisible();
});
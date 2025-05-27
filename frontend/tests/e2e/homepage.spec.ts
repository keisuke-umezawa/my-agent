import { test, expect } from '@playwright/test';

test('homepage has blank page', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/My Agent/);
  
  const mainContent = page.locator('.min-h-screen');
  await expect(mainContent).toBeVisible();
});

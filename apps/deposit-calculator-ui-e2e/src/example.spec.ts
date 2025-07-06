import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Deposit Calculator');
});

test('should not have any automatically detectable accessibility issues', async ({
  page,
}) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

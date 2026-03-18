import { test, expect } from '@playwright/test';
import { WelcomePage } from '../pom/WelcomePage';
import { AppsPage } from '../pom/AppsPage';
import { ContactPage } from '../pom/ContactPage';
import { GamesPage } from '../pom/GamesPage';

test.describe('Smoke tests', () => {
  test('welcome page loads with header and content', async ({ page }) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.goto();

    await expect(welcomePage.header.root).toBeVisible();
    await expect(welcomePage.content).toBeVisible();
    await expect(welcomePage.heading).toBeVisible();
  });

  test('apps page loads with header and content', async ({ page }) => {
    const appsPage = new AppsPage(page);
    await appsPage.goto();

    await expect(appsPage.header.root).toBeVisible();
    await expect(appsPage.content).toBeVisible();
    await expect(appsPage.heading).toBeVisible();
  });

  test('contact page loads with header and content', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await expect(contactPage.header.root).toBeVisible();
    await expect(contactPage.content).toBeVisible();
    await expect(contactPage.heading).toBeVisible();
  });

  test('games page loads with header and content', async ({ page }) => {
    const gamesPage = new GamesPage(page);
    await gamesPage.goto();

    await expect(gamesPage.header.root).toBeVisible();
    await expect(gamesPage.content).toBeVisible();
    await expect(gamesPage.heading).toBeVisible();
  });
});

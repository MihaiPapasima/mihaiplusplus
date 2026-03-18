import { test, expect } from '@playwright/test';
import { WelcomePage } from '../pom/WelcomePage';

test.describe('Navigation', () => {
  let welcomePage: WelcomePage;

  test.beforeEach(async ({ page }) => {
    welcomePage = new WelcomePage(page);
    await welcomePage.goto();
  });

  test('logo navigates to welcome page', async ({ page }) => {
    await welcomePage.header.appsNavLink.click();
    await welcomePage.header.logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('nav welcome link navigates to welcome page', async ({ page }) => {
    await welcomePage.header.welcomeNavLink.click();
    await expect(page).toHaveURL('/');
  });

  test('nav apps link navigates to apps page', async ({ page }) => {
    await welcomePage.header.appsNavLink.click();
    await expect(page).toHaveURL('/apps');
  });

  test('nav contact link navigates to contact page', async ({ page }) => {
    await welcomePage.header.contactNavLink.click();
    await expect(page).toHaveURL('/contact');
  });

  test('nav games link navigates to games page', async ({ page }) => {
    await welcomePage.header.gamesNavLink.click();
    await expect(page).toHaveURL('/games');
  });
});

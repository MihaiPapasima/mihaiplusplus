import { test, expect } from "@playwright/test";
import { WelcomePage } from "../pageObjects/pages/WelcomePage";
import { AppsPage } from "../pageObjects/pages/AppsPage";
import { ContactPage } from "../pageObjects/pages/ContactPage";
import { GamesPage } from "../pageObjects/pages/GamesPage";

test.describe("Smoke tests", () => {
  test("welcome page loads with header and content", async ({ page }) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.goto();

    await expect(welcomePage.header.locator).toBeVisible();
    await expect(welcomePage.contentLocator).toBeVisible();
  });

  test("apps page loads with header and content", async ({ page }) => {
    const appsPage = new AppsPage(page);
    await appsPage.goto();

    await expect(appsPage.header.locator).toBeVisible();
    await expect(appsPage.contentLocator).toBeVisible();
  });

  test("contact page loads with header and content", async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await expect(contactPage.header.locator).toBeVisible();
    await expect(contactPage.contentLocator).toBeVisible();
  });

  test("games page loads with header and content", async ({ page }) => {
    const gamesPage = new GamesPage(page);
    await gamesPage.goto();

    await expect(gamesPage.header.locator).toBeVisible();
    await expect(gamesPage.contentLocator).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";
import { WelcomePage } from "../pageObjects/pages/WelcomePage";

test.describe("Welcome page", () => {
  let welcomePage: WelcomePage;

  test.beforeEach(async ({ page }) => {
    welcomePage = new WelcomePage(page);
    await welcomePage.goto();
  });

  test("displays the main heading", async () => {
    await expect(welcomePage.content).toBeVisible();
  });

  test("displays the eyebrow label", async ({ page }) => {
    await expect(
      page.getByText("QA Engineer · Tech Generalist · Netherlands"),
    ).toBeVisible();
  });

  test("displays the header with logo and nav links", async () => {
    await expect(welcomePage.header.locator).toBeVisible();
    await expect(welcomePage.header.logoLink).toBeVisible();
    await expect(welcomePage.header.welcomeNavLink).toBeVisible();
    await expect(welcomePage.header.appsNavLink).toBeVisible();
    await expect(welcomePage.header.contactNavLink).toBeVisible();
    await expect(welcomePage.header.gamesNavLink).toBeVisible();
  });
});

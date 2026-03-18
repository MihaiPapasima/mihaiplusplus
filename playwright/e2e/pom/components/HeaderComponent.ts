import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly root: Locator;
  readonly logoLink: Locator;
  readonly welcomeNavLink: Locator;
  readonly contactNavLink: Locator;
  readonly appsNavLink: Locator;
  readonly gamesNavLink: Locator;

  constructor(page: Page) {
    this.root = page.getByTestId('header');
    this.logoLink = page.getByTestId('logo');
    this.welcomeNavLink = page.getByTestId('nav-welcome');
    this.contactNavLink = page.getByTestId('nav-contact');
    this.appsNavLink = page.getByTestId('nav-apps');
    this.gamesNavLink = page.getByTestId('nav-games');
  }
}

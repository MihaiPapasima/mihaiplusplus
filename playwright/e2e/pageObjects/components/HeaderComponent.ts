import { Page, Locator } from "@playwright/test";
import { PageObject } from "./pageObject";

export class Header extends PageObject {
  readonly logoLink: Locator;
  readonly welcomeNavLink: Locator;
  readonly contactNavLink: Locator;
  readonly appsNavLink: Locator;
  readonly gamesNavLink: Locator;

  constructor(locator: Locator) {
    super(locator);
    this.logoLink = this.locator.getByTestId("logo");
    this.welcomeNavLink = this.locator.getByTestId("nav-welcome");
    this.contactNavLink = this.locator.getByTestId("nav-contact");
    this.appsNavLink = this.locator.getByTestId("nav-apps");
    this.gamesNavLink = this.locator.getByTestId("nav-games");
  }
}

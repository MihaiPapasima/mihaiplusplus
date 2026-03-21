import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class WelcomePage extends BasePage {
  readonly url = "/";
  readonly contentLocator: Locator;

  public constructor(page: Page) {
    super(page);
    this.contentLocator = this.content.getByRole("heading", {
      name: /Hi, I'm Mihai/i,
      level: 1,
    });
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }
}

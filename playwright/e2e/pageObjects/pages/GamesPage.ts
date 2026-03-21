import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class GamesPage extends BasePage {
  readonly url = "/games";
  readonly contentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentLocator = this.page.getByRole("heading", {
      name: "Games",
      level: 3,
    });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

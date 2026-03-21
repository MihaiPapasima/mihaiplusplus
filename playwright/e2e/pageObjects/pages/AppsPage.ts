import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AppsPage extends BasePage {
  readonly url = "/apps";
  readonly contentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentLocator = this.page.getByRole("heading", {
      name: "Apps",
      level: 3,
    });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

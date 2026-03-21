import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactPage extends BasePage {
  readonly url = "/contact";
  readonly contentLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentLocator = this.page.getByRole("heading", {
      name: "Contact",
      level: 3,
    });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

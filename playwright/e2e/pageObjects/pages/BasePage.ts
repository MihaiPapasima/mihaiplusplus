import { Page, Locator } from "@playwright/test";
import { Header } from "../components/HeaderComponent";

export class BasePage {
  readonly page: Page;

  readonly header: Header;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(this.page.getByTestId("header"));
    this.content = page.getByTestId("content");
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}

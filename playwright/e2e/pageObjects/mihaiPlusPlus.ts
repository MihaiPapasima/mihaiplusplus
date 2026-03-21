import { Page } from "@playwright/test";
import { WelcomePage } from "./pages/WelcomePage";

export class MihaiPlusPlus {
  private readonly _page: Page;

  public constructor(page: Page) {
    this._page = page;
  }

  public get welcomePage(): WelcomePage {
    return new WelcomePage(this._page);
  }
}

import { Locator } from "@playwright/test";

export class PageObject {
  readonly locator: Locator;

  public constructor(locator: Locator) {
    this.locator = locator;
  }

  public isVisible = async (): Promise<boolean> => {
    return await this.locator.isVisible();
  };
}

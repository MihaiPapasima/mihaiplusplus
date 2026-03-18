import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class WelcomePage extends BasePage {
  readonly url = '/';
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = this.getByRole('heading', { name: /Hi, I'm Mihai/i, level: 1 });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

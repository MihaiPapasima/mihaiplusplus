import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class GamesPage extends BasePage {
  readonly url = '/games';
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = this.getByRole('heading', { name: 'Games', level: 3 });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

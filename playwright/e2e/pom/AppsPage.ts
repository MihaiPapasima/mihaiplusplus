import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AppsPage extends BasePage {
  readonly url = '/apps';
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = this.getByRole('heading', { name: 'Apps', level: 3 });
  }

  async goto(): Promise<void> {
    await this.navigate(this.url);
  }
}

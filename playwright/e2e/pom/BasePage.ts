import { Page, Locator } from '@playwright/test';
import { HeaderComponent } from './components/HeaderComponent';

export abstract class BasePage {
  readonly header: HeaderComponent;
  readonly content: Locator;

  constructor(protected readonly page: Page) {
    this.header = new HeaderComponent(page);
    this.content = page.getByTestId('content');
  }

  getByRole(role: Parameters<Page['getByRole']>[0], options?: Parameters<Page['getByRole']>[1]): Locator {
    return this.page.getByRole(role, options);
  }

  getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  async navigate(path: string): Promise<void> {
    await this.page.goto(path);
  }
}

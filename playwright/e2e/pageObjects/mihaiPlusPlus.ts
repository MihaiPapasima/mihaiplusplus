import { Page } from "@playwright/test";
import { WelcomePage } from "./pages/WelcomePage";
import { ContactPage } from "./pages/ContactPage";
import { GamesPage } from "./pages/GamesPage";
import { AppsPage } from "./pages/AppsPage";

export class MihaiPlusPlus {
  readonly page: Page;
  readonly welcomePage: WelcomePage;
  readonly contactPage: ContactPage;
  readonly gamesPage: GamesPage;
  readonly appsPage: AppsPage;

  public constructor(page: Page) {
    this.page = page;
    this.welcomePage = new WelcomePage(this.page);
    this.contactPage = new ContactPage(this.page);
    this.gamesPage = new GamesPage(this.page);
    this.appsPage = new AppsPage(this.page);
  }
}

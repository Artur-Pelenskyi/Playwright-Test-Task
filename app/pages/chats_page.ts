import { Locator, Page, expect } from '@playwright/test'
import { BasePage } from '../base_page'
import { MainMenuComponent } from "../components/main_menu_component";

export class ChatsPage extends BasePage {
    mainMenuComponent: MainMenuComponent
    searchField: Locator

    constructor(page: Page) {
        super(page);
        this.mainMenuComponent = new MainMenuComponent(page)
        this.searchField = page.locator('[placeholder="Search"]')
    }

    async checkChatsPageIsOpened() {
        await expect(this.mainMenuComponent.chatsButton).toBeVisible()
        await expect(this.mainMenuComponent.companyLogo).toBeVisible()
        await expect(this.searchField).toBeVisible()
    }
}
import { Locator, Page, expect } from '@playwright/test'
import { BasePage } from '../base_page'

export class MainMenuComponent extends BasePage {
    companyLogo: Locator
    chatsButton: Locator
    usersMenu: Locator
    driversButton: Locator

    constructor(page: Page) {
        super(page);
        this.companyLogo = page.locator('.company-logo')
        this.chatsButton = page.locator('[href="/chats"]')
        this.usersMenu = page.locator('.v-list-item-title:has-text("Users")')
        this.driversButton = page.locator('[href="/users/drivers"]')
    }

    async openDriversPage() {
        expect(this.usersMenu).toBeVisible()
        await this.usersMenu.click()
        await this.driversButton.click()
    }
}

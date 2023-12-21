import { BasePage } from '../base_page'
import { Locator, Page } from '@playwright/test'
import { URLS } from "../../common/constants";

export class LoginPage extends BasePage {
    emailInput: Locator
    passwordInput: Locator
    logInButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.emailInput = page.locator('[type="email"]')
        this.passwordInput = page.locator('[type="password"]')
        this.logInButton = page.locator('button:has-text("Log in")')
    }


    async loginToOmniDispatch (username: string, password: string) {
        await this.page.goto(URLS.loginUrl)
        await this.emailInput.fill(username)
        await this.passwordInput.fill(password)
        await this.logInButton.click()
    }

}
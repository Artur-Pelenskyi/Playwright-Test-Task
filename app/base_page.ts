import { Browser, Page } from '@playwright/test'

export class BasePage {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Creates a new browser context. It won't share cookies/cache with other browser contexts.
     * ```ts
     * await this.context(browser)
     * ```
     * @param browser
     * @returns newPage
     */
    async context(browser: Browser) {
        const context = await browser.newContext()
        return await context.newPage()
    }
}
import { Locator, Page, expect } from '@playwright/test'
import { BasePage } from '../base_page'
import { MainMenuComponent } from "../components/main_menu_component";

export class DriversPage extends BasePage {
    mainMenuComponent: MainMenuComponent
    driversTable: Locator
    driverName: Locator

    constructor(page: Page) {
        super(page);
        this.mainMenuComponent = new MainMenuComponent(page)
        this.driversTable = page.locator('.omni-table')
        this.driverName = page.locator('.driver-name')
    }

    async checkDriversTableHasData() {
        await expect(this.driversTable).toBeVisible()
        await this.driverName.first().waitFor({state: 'visible'})
        await expect(await this.driverName.count() > 0).toBeTruthy()
    }
}
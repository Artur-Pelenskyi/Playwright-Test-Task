import { test } from "../fixtures/_base";
import { EMAILS } from "../common/constants";

test.describe('Check drivers list', () => {
    test.beforeEach(async ({loginPage, chatsPage}) => {
        await loginPage.loginToOmniDispatch(EMAILS.testUser, process.env.PASSWORD)
        await chatsPage.checkChatsPageIsOpened()
    })

    test('Check drivers list has data', async ({chatsPage, driversPage}) => {
        await chatsPage.mainMenuComponent.openDriversPage()
        await driversPage.checkDriversTableHasData()
    })
})

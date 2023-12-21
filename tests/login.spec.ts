import {test} from "../fixtures/_base";
import {EMAILS} from "../common/constants";

test.describe('Login to the platform', () => {
    test('Check login to the platform', async ({loginPage, chatsPage}) =>{
        await loginPage.loginToOmniDispatch(EMAILS.testUser, process.env.PASSWORD)
        await chatsPage.checkChatsPageIsOpened()
    })
})
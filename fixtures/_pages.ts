import { ChatsPage } from "../app/pages/chats_page";
import { DriversPage } from "../app/pages/drivers_page";
import { LoginPage } from "../app/pages/login_page";

export interface PageObjects {
    chatsPage: ChatsPage
    driversPage: DriversPage
    loginPage: LoginPage
}

/*ignore*/
export const pages = {
    chatsPage: async ({ page }, use) =>
    {
        use (new ChatsPage(page))
    },
    driversPage: async ({ page }, use) =>
    {
        use (new DriversPage(page))
    },
    loginPage: async ({ page }, use) =>
    {
        use (new LoginPage(page))
    }
}
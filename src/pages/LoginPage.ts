import {Locator, Page} from "@playwright/test";
import {fixture} from "../test/hooks/Fixture";
import {setDefaultTimeout} from "@cucumber/cucumber";

setDefaultTimeout(2 * 120000);
export default class LoginPage {
    txtUsername: Locator = fixture.page.locator('[data-test="username"]');
    txtPassword: Locator = fixture.page.locator('[data-test="password"]');
    bntLogin: Locator = fixture.page.locator('[data-test="login-button"]');
    errMessage: Locator = fixture.page.locator('[data-test="error"]');

    constructor(private page: Page) {
    }


    async navigateToLoginPage() {
        await fixture.page.goto(process.env.BASEURL);
        await fixture.page.waitForLoadState("load");
    }

    async enterCredentials(username: string, password: string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
    }

    async clickLogin() {
        await this.bntLogin.click();
    }
}


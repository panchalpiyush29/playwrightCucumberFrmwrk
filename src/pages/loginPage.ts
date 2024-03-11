import {Locator, Page} from "@playwright/test";
import {fixture} from "../test/hooks/fixture";
import {setDefaultTimeout} from "@cucumber/cucumber";

setDefaultTimeout(2 * 120000);
export default class LoginPage {

    constructor(private page: Page) {
    }

    txtUsername: Locator = fixture.page.locator('[data-test="username"]');
    txtPassword: Locator = fixture.page.locator('[data-test="password"]');
    bntLogin: Locator = fixture.page.locator('[data-test="login-button"]');
    errMessage: Locator = fixture.page.locator('[data-test="error"]');

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


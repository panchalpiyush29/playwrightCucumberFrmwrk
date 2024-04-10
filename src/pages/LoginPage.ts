import {Locator, Page} from "@playwright/test";
import {fixture} from "../test/hooks/Fixture";
import SkinnyPage from "./SkinnyPage";

export default class LoginPage extends SkinnyPage {
    txtUsername: Locator = fixture.page.locator('[data-test="username"]');
    txtPassword: Locator = fixture.page.locator('[data-test="password"]');
    bntLogin: Locator = fixture.page.locator('[data-test="login-button"]');
    errMessage: Locator = fixture.page.locator('[data-test="error"]');

    constructor(private page: Page) {
        super();
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

    async validateErrorMessage(errorMessage: string) {
        await this.validateText(this.errMessage, errorMessage);
    }
}

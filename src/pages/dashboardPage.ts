import {expect, Locator, Page} from "@playwright/test";
import {setDefaultTimeout} from "@cucumber/cucumber";
import {fixture} from "../test/hooks/fixture";

setDefaultTimeout(2 * 120000);
export default class DashboardPage {

    constructor(private page: Page) {
    };

    shoppingCartIcon: Locator = fixture.page.locator('#shopping_cart_container a');

    async shoppingCartIconToBeDisplayed() {
        await fixture.page.waitForLoadState();
        await expect(this.shoppingCartIcon).toBeVisible()
    }
}
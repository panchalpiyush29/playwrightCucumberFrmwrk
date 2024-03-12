import {expect, Locator, Page} from "@playwright/test";
import {setDefaultTimeout} from "@cucumber/cucumber";
import {fixture} from "../test/hooks/fixture";

setDefaultTimeout(2 * 120000);
export default class InventoryPage {

    constructor(private page: Page) {
    };

    shoppingCartIcon: Locator = fixture.page.locator('#shopping_cart_container a');
    sauceLabsBackpack: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    shoppingCartLink: Locator = fixture.page.locator('a').filter({hasText: '1'});
    productName: Locator = fixture.page.getByRole('link', {name: 'Sauce Labs Backpack'});
    checkoutButton: Locator = fixture.page.locator('[data-test="checkout"]');

    async shoppingCartIconToBeDisplayed() {
        await fixture.page.waitForLoadState();
        await expect(this.shoppingCartIcon).toBeVisible()
    }

    async addToCart() {
        await this.sauceLabsBackpack.click();
    }

    async clickShoppingCartLink() {
        await this.shoppingCartLink.click();
    }

    async verifyProductDetails() {
        expect(await this.productName.isVisible()).toBeTruthy();
        expect(fixture.page.getByText('$29.99')).toBeTruthy();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}
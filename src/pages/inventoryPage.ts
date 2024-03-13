import {expect, Locator, Page} from "@playwright/test";
import {setDefaultTimeout} from "@cucumber/cucumber";
import {fixture} from "../test/hooks/fixture";

setDefaultTimeout(2 * 120000);
export default class InventoryPage {

    constructor(private page: Page) {
    };

    shoppingCartIcon: Locator = fixture.page.locator('#shopping_cart_container a');
    sauceLabsBackpack: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    sauceLabsBikeLight: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    sauceLabsBoltTshirt: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    sauceLabsFleeceJacket: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    sauceLabsOnesie: Locator = fixture.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    sauceLabsTestAllTheThingsTshirt: Locator = fixture.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    shoppingCartLink: Locator = fixture.page.locator('a').filter({hasText: '1'});
    productName: Locator = fixture.page.locator('.inventory_item_name');
    checkoutButton: Locator = fixture.page.locator('[data-test="checkout"]');

    async shoppingCartIconToBeDisplayed() {
        await fixture.page.waitForLoadState();
        await expect(this.shoppingCartIcon).toBeVisible()
    }

    async addToCart(product: string) {
        switch (product) {
            case "Sauce Labs Backpack": {
                await this.sauceLabsBackpack.click();
                break;
            }

            case "Sauce Labs Bike Light": {
                await this.sauceLabsBikeLight.click();
                break;
            }

            case "Sauce Labs Bolt T-Shirt": {
                await this.sauceLabsBoltTshirt.click();
                break;
            }

            case "Sauce Labs Fleece Jacket": {
                await this.sauceLabsFleeceJacket.click();
                break;
            }

            case "Sauce Labs Onesie": {
                await this.sauceLabsOnesie.click();
                break;
            }

            case "Test.allTheThings() T-Shirt (Red)": {
                await this.sauceLabsTestAllTheThingsTshirt.click();
                break;
            }
        }

    }

    async clickShoppingCartLink() {
        await this.shoppingCartLink.click();
    }

    async verifyProductDetails(product: string, price: string) {
        //expect(await this.productName.isVisible()).toBeTruthy();
        await expect(this.productName).toContainText(product);
        expect(fixture.page.getByText(price)).toBeTruthy();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}
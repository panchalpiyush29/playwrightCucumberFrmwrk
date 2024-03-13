import {expect, Locator, Page} from "@playwright/test";
import {setDefaultTimeout} from "@cucumber/cucumber";
import {fixture} from "../test/hooks/fixture";
import {faker} from "@faker-js/faker";

setDefaultTimeout(2 * 120000);
export default class CheckoutPage {

    constructor(private page: Page) {
    }

    firstName: Locator = fixture.page.locator('[data-test="firstName"]');
    lastName: Locator = fixture.page.locator('[data-test="lastName"]');
    postalCode: Locator = fixture.page.locator('[data-test="postalCode"]');
    continueButton: Locator = fixture.page.locator('[data-test="continue"]');
    productName: Locator = fixture.page.locator('.inventory_item_name');
    finishButton: Locator = fixture.page.locator('[data-test="finish"]');

    async enterYourInformation() {
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        await this.postalCode.fill(faker.location.zipCode());
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async verifySuccessMessage() {
        await fixture.page.waitForLoadState();
        expect(fixture.page.getByText('Thank you for your order!')).toBeTruthy();
    }

    async verifyProductAndPrice(product: string, price: string) {
        await expect(this.productName).toContainText(product);
        expect(fixture.page.getByText(price)).toBeTruthy();
    }
}


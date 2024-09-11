import {Locator, Page} from "@playwright/test";
import {fixture} from "../test/hooks/Fixture";
import {faker} from "@faker-js/faker";
import BasePage from "./BasePage";


export default class CheckoutPage extends BasePage {

    firstName: Locator = fixture.page.locator('[data-test="firstName"]');
    lastName: Locator = fixture.page.locator('[data-test="lastName"]');
    postalCode: Locator = fixture.page.locator('[data-test="postalCode"]');
    continueButton: Locator = fixture.page.locator('[data-test="continue"]');
    productName: Locator = fixture.page.locator('.inventory_item_name');
    finishButton: Locator = fixture.page.locator('[data-test="finish"]');

    constructor(private page: Page) {
        super();
    }

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

    async verifySuccessMessage(successMessage: string) {
        await fixture.page.waitForLoadState();
        await this.validateTextToBeTruthy(fixture.page, successMessage);
    }

    async verifyProductAndPrice(product: string, price: string) {
        await this.validateText(this.productName, product);
        await this.validateTextToBeTruthy(fixture.page, price);
    }
}


import {expect, Locator, Page} from "@playwright/test";

const timeout = 20000;
export default class BasePage {

    async validateText(locator: any, text: string) {
        await expect(locator).toContainText(text, {timeout});
    }

    async validateTextToBeTruthy(locator: Page, text: string) {
        expect(locator.getByText(text)).toBeTruthy();
    }

    async validateIconToBeVisible(locator: Locator) {
        await expect(locator).toBeVisible({timeout});
    }
}

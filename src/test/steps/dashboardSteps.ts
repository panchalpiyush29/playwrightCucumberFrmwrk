import {setDefaultTimeout, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {fixture} from "../hooks/fixture";

setDefaultTimeout(2 * 120000);
Then(/^user can access the dashboard$/, async () => {
    await fixture.page.waitForLoadState();
    await expect(fixture.page.locator('#shopping_cart_container a')).toBeVisible();
    fixture.logger.info("valid user can access the dashboard");
});
import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {fixture} from "../hooks/fixture";

setDefaultTimeout(2 * 120000);

Given(/^user navigates to saucedemo website$/, async () => {
    await fixture.page.goto(process.env.BASEURL);
    await fixture.page.waitForLoadState();
});

When(/^user enters login credentials "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await fixture.page.locator('[data-test="username"]').fill(username);
    await fixture.page.locator('[data-test="password"]').fill(password);
});
When(/^clicks on login button$/, async () => {
    await fixture.page.locator('[data-test="login-button"]').click();
});


Then(/^user gets a login error message$/, async () => {
    await expect(fixture.page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
    fixture.logger.info("invalid user gets a error message");
});
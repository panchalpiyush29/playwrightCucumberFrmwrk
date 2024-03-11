import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import {fixture} from "../hooks/fixture";
import LoginPage from "../../pages/loginPage";

setDefaultTimeout(2 * 120000);
let loginPage: LoginPage;
Given(/^user navigates to saucedemo website$/, async () => {
    loginPage = new LoginPage(fixture.page);
    await loginPage.navigateToLoginPage();
});

When(/^user enters login credentials "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await loginPage.enterCredentials(username, password);
});

When(/^clicks on login button$/, async () => {
    await loginPage.clickLogin();
});

Then(/^user gets a login error message$/, async () => {
    await expect(loginPage.errMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    fixture.logger.info("invalid user gets a error message");
});
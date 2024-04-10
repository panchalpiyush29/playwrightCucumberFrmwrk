import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import {fixture} from "../hooks/Fixture";
import LoginPage from "../../pages/LoginPage";

setDefaultTimeout(60000);
const loginData = JSON.parse(JSON.stringify(require("../../helper/util/test-data/loginDetails.json")));
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

Given(/^I am a standard user who is logged in$/, async () => {
    await loginPage.enterCredentials(loginData.username, loginData.password);
    await loginPage.clickLogin();
});
Then(/^user gets a login error message "([^"]*)"$/, async function (errorMessage) {
    await loginPage.validateErrorMessage(errorMessage);
    fixture.logger.info("invalid user gets a error message");

});

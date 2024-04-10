import {Given, setDefaultTimeout, Then, When} from "@cucumber/cucumber";
import {fixture} from "../hooks/Fixture";
import CheckoutPage from "../../pages/CheckoutPage";

setDefaultTimeout(60000);
let checkoutPage: CheckoutPage;

Given(/^I enter checkout information$/, async () => {
    checkoutPage = new CheckoutPage(fixture.page);
    await fixture.page.waitForLoadState();
    await checkoutPage.enterYourInformation();
    await checkoutPage.clickContinueButton();
});

When(/^I submit my order$/, async () => {
    await checkoutPage.clickFinish();
});

Then(/^I can see the success page$/, async (successMessage) => {
    await checkoutPage.verifySuccessMessage(successMessage);
});

When(/^I submit my order after verifying the "([^"]*)" and its "([^"]*)"$/, async function (product, price) {
    await checkoutPage.verifyProductAndPrice(product, price);
    await checkoutPage.clickFinish();
});
Then(/^I can see the success page "([^"]*)"$/, async function (successMessage) {
    await checkoutPage.verifySuccessMessage(successMessage);
});

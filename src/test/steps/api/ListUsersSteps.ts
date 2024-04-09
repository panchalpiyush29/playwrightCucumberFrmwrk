import {Given, Then} from "@cucumber/cucumber";
import ListUsersPage from "../../../pages/api/ListUsersPage";

const listUsersPage = new ListUsersPage();
Given(/^I fetch user details$/, async function () {
    await listUsersPage.getUserDetails();
});

Then(/^I should see user details for "([^"]*)" "([^"]*)"$/, function (firstName, lastName) {
    listUsersPage.verifyResponseName(firstName, lastName);
});
Then(/^The response code must be (\d+)$/, function (int) {
    listUsersPage.verifyResponseCode(int);
});

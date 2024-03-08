import {setDefaultTimeout, Then} from "@cucumber/cucumber";
import {fixture} from "../hooks/fixture";
import DashboardPage from "../../pages/dashboardPage";

setDefaultTimeout(2 * 120000);

let dashboardPage: DashboardPage;

Then(/^user can access the dashboard$/, async () => {
    dashboardPage = new DashboardPage(fixture.page);
    await dashboardPage.shoppingCartIconToBeDisplayed()
    fixture.logger.info("valid user can access the dashboard");
});
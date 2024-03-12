import {Given, setDefaultTimeout, Then} from "@cucumber/cucumber";
import {fixture} from "../hooks/fixture";
import InventoryPage from "../../pages/inventoryPage";

setDefaultTimeout(2 * 120000);
let inventoryPage: InventoryPage;
Given(/^I choose to buy a product$/, async () => {
    inventoryPage = new InventoryPage(fixture.page);
    await inventoryPage.shoppingCartIconToBeDisplayed();
    await inventoryPage.addToCart();
    await inventoryPage.clickShoppingCartLink();
    await inventoryPage.verifyProductDetails();
    await inventoryPage.clickCheckoutButton();
});

Then(/^user can access the dashboard$/, async () => {
    inventoryPage = new InventoryPage(fixture.page);
    await inventoryPage.shoppingCartIconToBeDisplayed();
});

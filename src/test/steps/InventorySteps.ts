import {Given, setDefaultTimeout, Then} from "@cucumber/cucumber";
import {fixture} from "../hooks/Fixture";
import InventoryPage from "../../pages/InventoryPage";

setDefaultTimeout(2 * 120000);
let inventoryPage: InventoryPage;

Then(/^user can access the dashboard$/, async () => {
    inventoryPage = new InventoryPage(fixture.page);
    await inventoryPage.shoppingCartIconToBeDisplayed();
});


Given(/^I choose to buy a "([^"]*)" after reviewing the "([^"]*)"$/, async function (product, price) {
    inventoryPage = new InventoryPage(fixture.page);
    await inventoryPage.shoppingCartIconToBeDisplayed();
    await inventoryPage.addToCart(product);
    await inventoryPage.clickShoppingCartLink();
    await inventoryPage.verifyProductDetails(product,price);
    await inventoryPage.clickCheckoutButton();
});

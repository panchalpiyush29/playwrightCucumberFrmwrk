@smoke @regression @e2e
Feature: Product purchase
  As a customer
  I want to buy a product from saucedemo website

  Background:
    Given user navigates to saucedemo website

  Scenario Outline: users can buy a product from sauce demo website
    Given I am a standard user who is logged in
    And I choose to buy a "<product>" after reviewing the "<price>"
    And I enter checkout information
    When I submit my order after verifying the "<product>" and its "<price>"
    Then I can see the success page "Thank you for your order!"
    Examples:
      | product                           | price  |
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |

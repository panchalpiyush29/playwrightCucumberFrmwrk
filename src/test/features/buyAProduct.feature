Feature: Buy all products offered in the sauce demo website

  Background:
    Given user navigates to saucedemo website

  @smoke @regression
  Scenario: users can buy a product
    Given I am a standard user who is logged in
    And I choose to buy a product
    And I enter checkout information
    When I submit my order
    Then I can see the success page

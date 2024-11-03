@smoke @regression
Feature: Login functionality
  As a user I want to be able to login so that I can access my account

  Background:
    Given user navigates to saucedemo website

  Scenario: Existing users can login
    When user enters login credentials "standard_user" and "secret_sauce"
    And clicks on login button
    Then user can access the dashboard

  Scenario: Not registered users cannot login
    When user enters login credentials "standard_user" and "secret"
    And clicks on login button
    Then user gets a login error message "Epic sadface: Username and password do not match any user in this service"

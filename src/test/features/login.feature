Feature: User Authentication tests

  Background:
    Given user navigates to saucedemo website

  @smoke @regression
  Scenario: Existing users can login
    When user enters login credentials "standard_user" and "secret_sauce"
    And clicks on login button
    Then user can access the dashboard

  @regression
  Scenario: Not registered users cannot login
    When user enters login credentials "standard_user" and "secret"
    And clicks on login button
    Then user gets a login error message

@apiTest @regression
Feature: Api testing

  Scenario: I can verify user details using api
    Given I fetch user details
    Then The response code must be 200
    And I should see user details for "Michael" "Lawson"

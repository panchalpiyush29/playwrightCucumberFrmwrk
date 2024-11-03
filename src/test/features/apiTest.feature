@apiTest @regression
Feature: User detail api
  As a user
  I want to fetch user list via API call
  so that I can verify if my user exists


  Scenario: I can verify user details using api
    Given I fetch user details
    Then The response code must be 200
    And I should see user details for "Michael" "Lawson"

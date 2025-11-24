Feature: Organization management

  Background:
    Given the user logs in with the default credentials

  Scenario: Create a new organization
    When the user starts creating a new organization
    And the user enters the organization name fake
    Then the user saves the organization

  Scenario: Delete an existing organization
    When the user selects the saved organization card
    And the user opens the organization management menu
    Then the user deletes the organization

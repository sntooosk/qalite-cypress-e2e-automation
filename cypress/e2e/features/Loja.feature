Feature: Store management

  Background:
    Given the user logs in with the default credentials
    And the user is on the organization page

  Scenario: Create a new store
    When the user selects the saved organization card
    And the user starts creating a new store
    And the user enters the store dados faker
    Then the user saves the store
    And the toast message "Nova loja cadastrada." is displayed

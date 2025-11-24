Feature: Profile

  Background:
    Given the user logs in with the default credentials

  Scenario: Update Profile
    When the user visits the profile page
    And the user types a new last name fake
    Then the user updates the profile

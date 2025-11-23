Feature: Organization

  Background:
    Given I am on the Organization page

  Scenario: Create new organization
    When I click the new organization button
    And I type the organization name "Test Organization"
    Then I save the organization

  Scenario: Delete organization
    When I click the saved organization card
    And I open the manage organization menu
    Then I delete the organization

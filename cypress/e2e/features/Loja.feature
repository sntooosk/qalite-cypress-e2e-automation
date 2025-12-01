Feature: Store management

  Background:
    Given the user admin logs in with the default credentials
    And the user is on the organization page
    And the user selects the saved organization card

  Scenario: Create a new store
    When the user starts creating a new store
    And the user enters the store dados faker
    Then the user saves the store
    And the toast message "Nova loja cadastrada." is displayed

  Scenario: Edit an existing store
    When the user selects the saved store card
    And the user opens the store management menu
    And the user enters the store new name fake
    Then the user updates the store
    And the toast message "Loja atualizada com sucesso." is displayed

  Scenario: create new category in massa de cenarios
    When the user selects the saved store card
    And the user fills the category store form
    Then the user saves the category
    And the toast message "Categoria criada com sucesso." is displayed

  @focus
  Scenario: edit an existing category in massa de cenarios
    When the user selects the saved store card
    And the user click toggle category

  Scenario: Delete an existing store
    When the user selects the saved store card
    And the user opens the store management menu
    Then the user deletes the store
    And the modal confirm delete is displayed
    And the toast message "Loja removida com sucesso." is displayed

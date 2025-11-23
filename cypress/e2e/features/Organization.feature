Feature: Organization

  Background:
    Given estou na página de Organization

  Scenario: Criar nova Organizacao
    When clico no botao
    And escrevo o nome da org
    Then clico no botao salvar

  Scenario: apagar Organizacao
    When clico no card do org

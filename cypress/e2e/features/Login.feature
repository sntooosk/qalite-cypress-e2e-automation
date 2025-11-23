Feature: Login

  Background:
    Given I am on the login page

  Scenario: Login with default credentials
    When I log in with the default credentials
    Then the login should be successful

  Scenario: Login with incorrect password
    When the user enters the email "juliano.cassimiro@qualitydigital.global"
    And the user enters the password "senha_errada"
    And the user submits the form
    Then the message "E-mail ou senha incorretos. Confira os dados informados." should be displayed

Feature: User Authentication

  Scenario: Successful login
    Given I open the login page
    When I enter valid credentials
    And I click on the login button
    Then I should see the JWT Token

  Scenario: Failed login with incorrect credentials
    Given I open the login page
    When I enter invalid credentials
    And I click on the login button
    Then I should see an error message

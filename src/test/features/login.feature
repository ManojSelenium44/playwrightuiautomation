Feature: Login

  Scenario: Successful login
    Given I navigate to the login page
    When I login with valid credentials
    Then I should see the dashboard

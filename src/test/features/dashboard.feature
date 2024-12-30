Feature: Dashboard

  Scenario: View welcome message
    Given I navigate to the login page
    When I login with valid credentials
    Then I should see the dashboard
    When I should click on Complete profile
    Then I should click on Upload resume


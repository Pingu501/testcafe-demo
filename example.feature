Feature: TestCafe Demo Page

   Test the test page of TestCafe

   Scenario: Submit the test form
    Given I am at the example page

    When I set the username to "alex"
    And I say I tested TestCafe
    And I rate it with "10"
    And I press the submit button

    Then I see the thank you page

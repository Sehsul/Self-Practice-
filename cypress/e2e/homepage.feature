Feature: Clippy.io Homepage Test

  Scenario: Verify homepage loads and contains the correct title and content
    Given I visit the Clippy.io homepage
    Then the page title should include "Clippy"
    And the main heading "Clippy" should be visible

Feature: End to end GreenKart Validation

    Application Regression

    Scenario: To place particular order from GreenKart
    Given I open GreenKart Page
    When I add item to cart
    #And Validate the item added place order
    Then Select the country submit and verify Thankyou

    
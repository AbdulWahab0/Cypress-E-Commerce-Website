Feature: Verify cart summary total and sub total

    I want to log into my account
    I want to select product
    I want to add to cart
    I want to make payment
    I want to complete payment



    Scenario: Login
        Given the user open login page
        When the user type in
            | username            | password |
            | test111@test111.com | test111  |
        And the user clicks on Sign in button
        Then "John Smith" should be shown

    Scenario Outline: Shopping  Cart Summary/Total
        Given User is on product page
        When the user selects quantity "<quantity>"
        And the user selects size "<size>"
        And the user selects color "<color>"
        And the user add to cart
        And  the user should see selected item "<product>"
        Then the price should match
        Examples:
            | product                     | quantity | size | color |
            | Faded Short Sleeve T-shirts | 2        | M    | blue  |



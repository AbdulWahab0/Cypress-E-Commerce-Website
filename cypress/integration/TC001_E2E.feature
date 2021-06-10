Feature: Automate End to End Buy Order functionality.

    I want to log into my account
    I want to select product
    I want to add to cart
    I want to make payment
    I want to complete payment

  
    @e2e
    Scenario: Login
        Given the user open login page
        When the user type in
            | username            | password |
            | test111@test111.com | test111  |
        And the user clicks on Sign in button
        Then "John Smith" should be shown
 @e2e
     Scenario Outline: User selects a product
        Given User is on product page 
    
        Examples:
             | catageory | product                     | quantity | size | color |
            | Women  | Faded Short Sleeve T-shirts | 2        | M    | blue  |

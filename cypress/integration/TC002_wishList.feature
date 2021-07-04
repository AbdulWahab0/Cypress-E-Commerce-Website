Feature: Verify that 'Add to Wishlist' only works after login

    I want to navigate to home page without login
    I want to select a t shirts
    I want to add selected t shirt to wishlist
    I should get a error message displayed 'You must be logged in to manage your wishlist.'


    @wishList @TC002
    Scenario Outline: Select a t shirt and add to wishlist
        Given the user navigate to home page
        When the user selects "<t-short>" t shirt
        And the user add to wishlist
        Then the user should get error message
        Examples:
            | t-short                     |
            | Faded Short Sleeve T-shirts |
// --- Created by Jesan Rahman ---
var welcomeMessageDismissbutton = ".close-dialog > .mat-button-wrapper > span"
var cookieAcceptButton = ".cc-btn"
var pageHeaderButton = "button[aria-label='Back to homepage'] span[class='mat-button-wrapper'] span"
var itemAddToBasketButton = "button[aria-label='Add to Basket']"
var shoppingCartButton = "button[aria-label='Show the shopping cart']"
var checkOutButton = "#checkoutButton"
var purchasedItemname = ".mat-cell.cdk-cell.cdk-column-product.mat-column-product.ng-star-inserted"
var addNewAddressButton = "button[aria-label='Add a new address'] span[class='mat-button-wrapper'] span"
var addNewAddressHeader = "mat-card[class='mat-card mat-focus-indicator mat-elevation-z6'] h1"

function addItemToBasket() {

    cy.wait(2000)
    cy.get(itemAddToBasketButton)
        .eq(0)
        .click()
    cy.wait(5000)
    cy.get(shoppingCartButton).click()
    cy.get(purchasedItemname).should('be.visible')
    cy.get(checkOutButton).click()
    cy.wait(2000)
    cy.get(addNewAddressButton).click()
    cy.get(addNewAddressHeader).should('be.visible')
}
module.exports = {
    addItemToBasket
}
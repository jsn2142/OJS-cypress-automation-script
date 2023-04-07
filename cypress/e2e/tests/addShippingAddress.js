// --- Created by Jesan Rahman ---
var countryField = "input[placeholder='Please provide a country.']"
var nameField = "input[placeholder='Please provide a name.']"
var mobileNumberField = "input[placeholder='Please provide a mobile number.']"
var zipCodeField = "input[placeholder='Please provide a ZIP code.']"
var addressField = "#address"
var cityField = "input[placeholder='Please provide a city.']"
var stateField = "input[placeholder='Please provide a state.']"
var submitButton = "button[id='submitButton'] span[class='mat-button-wrapper']"
var addressSelection = ".mat-cell.cdk-cell.cdk-column-Selection.mat-column-Selection.ng-star-inserted"
var continueButton = "button[aria-label='Proceed to payment selection'] span[class='mat-button-wrapper'] span"

function addShippingAddress() {

    cy.wait(2000)
    cy.get(countryField).type("BD")
    cy.get(nameField).type("Andy Serkis")
    cy.get(mobileNumberField).type("123456789")
    cy.get(zipCodeField).type("3333")
    cy.get(addressField).type("123 Main st Ave.")
    cy.get(cityField).type("Dhaka")
    cy.get(stateField).type("Dhaka")
    cy.get(submitButton).click()
    cy.wait(3000)
    cy.get(addressSelection)
        .eq(0)
        .click()
    cy.wait(3000)
}
module.exports = {
    addShippingAddress
}
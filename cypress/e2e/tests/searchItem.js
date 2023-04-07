// --- Created by Jesan Rahman ---
var searchIcon = ".mat-icon.notranslate.mat-ripple.mat-search_icon-search.ng-tns-c253-1.material-icons.mat-ligature-font.mat-icon-no-color"
var searchField = ".mat-form-field-flex.ng-tns-c118-6"
var searchedProductName = "mat-card .item-name"
const env = Cypress.env("production")
var baseUrl = env['baseUrl']
function searchItem(searchString) {
    cy.visit(baseUrl)
    cy.wait(2000)
    cy.get(searchIcon).click()
    cy.get(searchField)
        .type(searchString)
        .type('{enter}')
    cy.wait(3000)
    cy.get(searchedProductName)
        .eq(0)
        .should('include.text', searchString)
    cy.get(searchedProductName)
        .eq(1)
        .should('include.text', searchString)
}
module.exports = {
    searchItem
}
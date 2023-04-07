// --- Created by Jesan Rahman ---
var welcomeMessageDismissbutton = ".close-dialog > .mat-button-wrapper > span"
var cookieAcceptButton = ".cc-btn"
var pageHeaderButton = "button[aria-label='Back to homepage'] span[class='mat-button-wrapper'] span"
function visitHomePage(baseUrl) {
    cy.visit(baseUrl)
    cy.wait(2000)
    cy.get(cookieAcceptButton).click()
    cy.get(welcomeMessageDismissbutton).click()
    cy.get(pageHeaderButton, { timeout: 10000 }).should('be.visible')
}
module.exports = {
    visitHomePage
}
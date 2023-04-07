// --- Created by Jesan Rahman ---
var welcomeMessageDismissbutton = ".close-dialog > .mat-button-wrapper > span"
var cookieAcceptButton = ".cc-btn"
var pageHeaderButton = "button[aria-label='Back to homepage'] span[class='mat-button-wrapper'] span"
var accountButton = "button[id='navbarAccount'] span[class='mat-button-wrapper'] span"
var loginPageButton = "#navbarLoginButton"
var loginPageHeader = "mat-card[class='mat-card mat-focus-indicator mat-elevation-z6'] h1"
var emailField = "#email"
var passwordField = "#password"
var loginButton = "#loginButton"
var profileVisitButton = "button[aria-label='Go to user profile'] span"

const env = Cypress.env("production")
var baseUrl = env['baseUrl']
Cypress.Commands.add('login', (email, password) => {
    cy.session([], () => {
        cy.get(accountButton).click()
        cy.get(loginPageButton, { timeout: 10000 }).should('be.visible')
        cy.get(loginPageButton).click()
        cy.get(loginPageHeader, { timeout: 10000 }).should('be.visible')
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password, { log: false })
        cy.wait(3000)
        cy.get(loginButton).click()
        cy.get(accountButton, { timeout: 10000 }).should('be.visible')
    })
})
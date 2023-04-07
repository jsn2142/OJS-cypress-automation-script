// --- Created by Jesan Rahman ---
import '../support/commands'
const { visitHomePage } = require('./tests/visitHomePage')
const { searchItem } = require('./tests/searchItem')
const env = Cypress.env("production")
var baseUrl = env['baseUrl']
var email = env['email']
var password = env['password']

describe('Login as an User and search an item', () => {
    it('Visit the Owasp Juice Shop', () => {
        cy.clearCookies()
        cy.clearLocalStorage();
        visitHomePage(baseUrl)
    })
    it('Login as an registered user', () => {
        cy.login(email, password)
    })
    it('Search an Item and verify the search results', () => {
        searchItem("Apple")
    })
})
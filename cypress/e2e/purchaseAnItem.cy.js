// --- Created by Jesan Rahman ---
import '../support/commands'
import { addShippingAddress } from './tests/addShippingAddress'
const { visitHomePage } = require('./tests/visitHomePage')
const { addItemToBasket } = require('./tests/addItemToBasket')
const env = Cypress.env("production")
var baseUrl = env['baseUrl']
var email = env['email']
var password = env['password']

describe('Login as an User and purchase an item with checking out', () => {
    it('Visit the Owasp Juice Shop', () => {
        cy.clearCookies()
        cy.clearLocalStorage();
        visitHomePage(baseUrl)
    })
    it('Login as an registered user', () => {
        cy.login(email, password)
    })
    it('Add an Item to the basket', () => {
        addItemToBasket()
    })
    it('Insert the Shipping address and continue', () => {
        addShippingAddress()
    })
    
})
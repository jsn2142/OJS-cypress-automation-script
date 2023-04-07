// --- Created by Jesan Rahman ---
const { authenticate } = require('./tests/authenticateWithAPI')
const { verifyItemsInBasket } = require('./tests/verifyItemsInBasketWithAPI')
const { addFirstbasketItem } = require('./tests/addfirstItemToBasketWithAPI')
const { deleteBasketItem } = require('./tests/deleteBasketItemWithAPI')
const { addMoreItemToBasket } = require('./tests/addMoreItemToBasketWithAPI')
const env = Cypress.env("production")
var email = env['email']
var password = env['password']
describe('Login as an User and Add two items', () => {
    it('Add one unit of the first Item in the Basket', () => {
        var productID = "1"
        cy.clearCookies()
        cy.clearLocalStorage();
        authenticate(email, password).then(() => {
            cy.get('@accessToken').then((accessToken) => {
                cy.get('@bID').then((bID) => {
                    verifyItemsInBasket(accessToken, bID, productID).then(() => {
                        cy.get('@foundItem').then((foundItem) => {
                            cy.get('@iterationID').then((iterationID) => {
                                cy.get('@quantity').then((quantity) => {
                                    if (foundItem == true) {
                                        cy.log("More Item in the existing basket will be added.")
                                        addMoreItemToBasket(accessToken, iterationID, quantity)
                                    }
                                    else {
                                        cy.log("It's a new item. So it will be added for the first time.")
                                        addFirstbasketItem(accessToken, productID, bID)
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    it('Add one unit of the second Item in the Basket', () => {
        var productID = "24"
        cy.clearCookies()
        cy.clearLocalStorage();
        authenticate(email, password).then(() => {
            cy.get('@accessToken').then((accessToken) => {
                cy.get('@bID').then((bID) => {
                    verifyItemsInBasket(accessToken, bID, productID).then(() => {
                        cy.get('@foundItem').then((foundItem) => {
                            cy.get('@iterationID').then((iterationID) => {
                                cy.get('@quantity').then((quantity) => {
                                    if (foundItem == true) {
                                        cy.log("More Item in the existing basket will be added.")
                                        addMoreItemToBasket(accessToken, iterationID, quantity)
                                    }
                                    else {
                                        cy.log("It's a new item. So it will be added for the first time.")
                                        addFirstbasketItem(accessToken, productID, bID)
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    it('Delete the Second Item from the Basket', () => {
        var productID = "24"
        cy.clearCookies()
        cy.clearLocalStorage();
        authenticate(email, password).then(() => {
            cy.get('@accessToken').then((accessToken) => {
                cy.get('@bID').then((bID) => {
                    verifyItemsInBasket(accessToken, bID, productID).then(() => {
                        cy.get('@foundItem').then((foundItem) => {
                            cy.get('@iterationID').then((iterationID) => {
                                cy.get('@quantity').then((quantity) => {
                                    if (foundItem == true) {
                                        cy.log("The item has been found in the Basket. It will now be deleted.")
                                        deleteBasketItem(accessToken, iterationID)
                                        expect(quantity).to.eq(1)
                                    }
                                    else {
                                        cy.log("The item is not present in the Basket.")
                                        
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
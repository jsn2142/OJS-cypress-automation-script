// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var baseUrl = env['APIBaseUrl']

function verifyItemsInBasket(accessToken, bID, productID) {
    return cy.request({
        url: baseUrl + 'rest/basket/' + bID,
        method: 'GET',
        timeout: 0,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + accessToken,
            "Connection": "keep-alive"
        }
    }).then((res) => {
        var responseStatus = res.status
        var foundItem = false
        var quantity = 0
        var pID = JSON.stringify(res.body.data.Products.ProductId) 
        var products = []
        products = res.body.data.Products
        const quantities = [];
        quantities.push(res.body.data.Products)
        Array.isArray(quantities)
        // products = res.body.data.products
        cy.log(JSON.stringify(res))
        for(var i = 0; i<products.length; i++) {
            var prodID = res.body.data.Products[i].BasketItem.ProductId
            cy.log("Product ID:  " + prodID)
            if(prodID == productID) {
                foundItem = true
                var iterationID = res.body.data.Products[i].BasketItem.id
                quantity = res.body.data.Products[i].BasketItem.quantity
                quantity = quantity
            }
        }
        expect(res.status).to.eq(200)
        return cy.wrap(responseStatus).as('responseStatus').then(() => {
            cy.wrap(foundItem).as('foundItem').then(() => {
                cy.wrap(iterationID).as('iterationID').then(() => {
                    cy.wrap(quantity).as('quantity')
                })
            })
        })

    })
}
module.exports = {
    verifyItemsInBasket
}

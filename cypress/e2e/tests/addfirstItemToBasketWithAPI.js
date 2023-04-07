// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var baseUrl = env['APIBaseUrl']

function addFirstbasketItem(accessToken, productID, bID) {
    return cy.request({
        url: baseUrl + 'api/BasketItems/',
        method: 'POST',
        timeout: 0,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + accessToken,
            "Origin": "https://juice-shop.herokuapp.com",
            "Referer": "https://juice-shop.herokuapp.com/"
        },
        body: {
            "ProductId": productID,
            "BasketId": bID,
            "quantity": 1
        }
    }).then((res) => {
        cy.log("Basket Item Body Data: ",JSON.stringify(res))
        var responseBody = JSON.stringify(res)
        var id = res.body.data.id
        cy.log(id)
        expect(res.status).to.eq(200)
        return cy.wrap(id).as('id')
    })
}
module.exports = {
    addFirstbasketItem
}
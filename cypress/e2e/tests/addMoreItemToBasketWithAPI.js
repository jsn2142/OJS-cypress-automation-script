// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var baseUrl = env['APIBaseUrl']

function addMoreItemToBasket(accessToken, iterationID, quantity) {
    cy.request({
        url: baseUrl + 'api/BasketItems/' + iterationID,
        method: 'PUT',
        timeout: 0,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + accessToken
        },
        body: {
            "quantity": quantity + 1
        }
    }).then((res) => {
        // cy.log(JSON.stringify(res))
        // var pID = res.body.data.id
        expect(res.status).to.eq(200)
    })
}
module.exports = {
    addMoreItemToBasket
}
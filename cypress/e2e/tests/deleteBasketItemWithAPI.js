// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var baseUrl = env['APIBaseUrl']

function deleteBasketItem(accessToken, iterationID) {
    return cy.request({
        url: baseUrl + 'api/BasketItems/' + iterationID,
        method: 'DELETE',
        timeout: 0,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ` + accessToken
        }
    }).then((res) => {
        expect(res.status).to.eq(200)
    })
}
module.exports = {
    deleteBasketItem
}
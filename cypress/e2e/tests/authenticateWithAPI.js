// --- Created by Jesan Rahman ---
const env = Cypress.env("production")
var baseUrl = env['APIBaseUrl']

function authenticate(email, password) {
    return cy.request({
        url: baseUrl + 'rest/user/login',
        method: 'POST',
        timeout: 0,
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "email": email,
            "password": password
        }
    }).then((res) => {
        cy.log(JSON.stringify(res))
        var accessToken = res.body.authentication.token
        var bID = res.body.authentication.bid
        expect(res.status).to.eq(200)
        // return cy.wrap(accessToken).as('accessToken')
        return cy.wrap(accessToken).as('accessToken').then(() => {
            return cy.wrap(bID).as('bID')
        })
    })
}
module.exports = {
    authenticate
}
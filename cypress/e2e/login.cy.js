import homepage from "../support/pages/homepage/homepage"
import { qase } from 'cypress-qase-reporter/mocha'
describe('Login Scenario', () => {

    qase(1, 
        it('Login with Valid Credentials', () => {
        cy.visit(Cypress.env('base_url'))
        homepage.typeUsername(Cypress.env('username'))
        homepage.typePassword(Cypress.env('password'))
        homepage.clickBtnLogin()
        homepage.validateUserLogin()
    })
)
})
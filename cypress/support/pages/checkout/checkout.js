const element = require('./elements').ELEMENTS

class Checkout {

    typeFirstName(firstName) {
        cy.get(element.inputFirstName).type(firstName)
    }
    typeLastName(lastName) {
        cy.get(element.inputLastName).type(lastName)
    }
    typeZipcode(zipcode) {
        cy.get(element.inputZipCode).type(zipcode)
    }
    clickBtnContinue() {
        cy.get(element.btnContinue).click()
    }
    clickBtnFinish() {
        cy.get(element.btnFinish).click()
    }

    validateCheckoutIsCompleted(){
        cy.get(element.checkoutCompleteMessage).should('be.visible')
        .and('have.text', 'Thank you for your order!')
    }

}

export default new Checkout()
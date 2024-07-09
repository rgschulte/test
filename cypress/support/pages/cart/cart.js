const element = require('./elements').ELEMENTS

class Cart {

    clickBtnCheckout() {
        cy.get(element.btnCheckout).click()
    }

}

export default new Cart()
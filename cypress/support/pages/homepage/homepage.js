const element = require('./elements').ELEMENTS
const inventory_page_elements = require('../inventory/elements').ELEMENTS
class Homepage {
    typeUsername(email) {
        cy.get(element.inputUsername).type(email)
    }
    typePassword(password) {
        cy.get(element.inputPassword).type(password)
    }
    clickBtnLogin() {
        cy.get(element.btnLogin).click()
    }

    login(email, password) {
        cy.visit(Cypress.env('base_url'))
        this.typeUsername(email)
        this.typePassword(password)
        this.clickBtnLogin()
    }

    validateUserLogin(){
        const url = 'https://www.saucedemo.com/inventory.html'
        cy.url().should('eq', url)
        cy.get(inventory_page_elements.inventoryContainer).should('be.visible')
        
    }
}

export default new Homepage()
const element = require('./elements').ELEMENTS

class Inventory {
    addBackpackToCart() {
        cy.get(element.btnAddToCartBackpack).click()
    }

    addTShirtToCart() {
        cy.get(element.btnAddToCartTShirt).click()
    }

    clickBtnShoppingCart(){
        cy.get(element.shoppingCartWithBadge).click()
    }

    validateProductsAreAddedToCart(){
        cy.get(element.shoppingCartWithBadge).should('be.visible')
        .and('have.text', '2')
    }
}

export default new Inventory()
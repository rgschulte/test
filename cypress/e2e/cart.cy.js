import homepage from '../support/pages/homepage/homepage'
import inventory_page from '../support/pages/inventory/inventory'
describe('Cart Scenario', () => {
    beforeEach(() => {
        homepage.login(Cypress.env('username'), Cypress.env('password'))
      })

    it('Adding Products to Cart', () => {
        inventory_page.addTShirtToCart()
        inventory_page.addBackpackToCart()
        inventory_page.validateProductsAreAddedToCart()
    })
})
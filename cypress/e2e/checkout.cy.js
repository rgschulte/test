import homepage from '../support/pages/homepage/homepage'
import inventory_page from '../support/pages/inventory/inventory'
import cart_page from '../support/pages/cart/cart'
import checkout_page from '../support/pages/checkout/checkout'
describe('Checkout Scenario', () => {
    beforeEach(() => {
        homepage.login(Cypress.env('username'), Cypress.env('password'))
      })

    it('Completes a Purchase', () => {
        inventory_page.addTShirtToCart()
        inventory_page.addBackpackToCart()
        inventory_page.clickBtnShoppingCart()
        cart_page.clickBtnCheckout()
        checkout_page.typeFirstName('Jefferson')
        checkout_page.typeLastName('Bessa')
        checkout_page.typeZipcode('39603258')
        checkout_page.clickBtnContinue()
        checkout_page.clickBtnFinish()
        checkout_page.validateCheckoutIsCompleted()

    })
})
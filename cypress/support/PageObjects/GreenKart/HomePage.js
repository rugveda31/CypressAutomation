class HomePage{

    getSearch() {
        return cy.get('.search-keyword')
    }

    getCartClick() {
        return cy.get('.cart-icon > img').click()
    }

    clickTopDeals() {
        return cy.get('[href="#/offers"]').invoke('removeAttr','target').click()
    }

    checkCopyRight() {
        return cy.get('footer p')
    }

    enterQuantity(quantity) {
        return cy.get("div .product .quantity").clear().type(quantity)
    }

    clickAddToCart() {
        return cy.get("div .product [type = 'button']").click()
    }

    getCheckout() {
        return cy.contains('PROCEED TO').click({force: true})
    }

    clickPlaceOrder() {
        cy.contains('Place Order').click()
    }

}

export default HomePage;


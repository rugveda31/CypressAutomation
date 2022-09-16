class WelcomePageOpKart {
    getWelcomeMsg() {
        return cy.get('h3')
    }

    clickContinue() {
        return cy.get('.buttons > .btn').click()
    }
}

export default WelcomePageOpKart;
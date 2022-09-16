class ConfirmPinPageOpKart {
    enterPin(pin) {
        return cy.get('#input-pin').type(pin)
    }

    clickContinue() {
        return cy.get('form > :nth-child(2) > .btn').click()
    }
}

export default ConfirmPinPageOpKart;
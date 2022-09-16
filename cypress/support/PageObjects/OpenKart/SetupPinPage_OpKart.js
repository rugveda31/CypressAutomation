class SetupPinPageOpKart {

    enterPin(pin) {
        return cy.get('#input-pin').type(pin)
    }
    
    clickPinSumbit() {
        return cy.get('form > .btn').click()
    }
}

export default SetupPinPageOpKart;
class AddNewAccount {
    enterCusID(cusId) {
        cy.get('input[name=\'cusid\']').type(cusId)
    }

    clickAccType() {
        cy.get('select[name = \'selaccount\']').select('Savings')
    }

    enterInitDeposit(amt) {
        cy.get("input[name = 'inideposit']").type(amt)
    }

    clickSubmit() {
        cy.get("input[name='button2']").click()
    }

    checkSuccessMsg() {
        return cy.get('.heading3')
    }
}

export default AddNewAccount;
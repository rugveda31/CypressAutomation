class HomePage {

    clickNewCustomer () {
        return cy.contains('New Customer').click()
    }



    clickNewAccount() {
        return cy.contains('New Account').click()
    }

}

export default HomePage;
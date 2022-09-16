class CountryPage {
    selectCountry(country) {
        return cy.get('select').select(country)
    }

    clickAgree() {
        return cy.get('.chkAgree').click()
    }
    
    clickProceed() {
        return cy.contains('Proceed').click()
    }

}

export default CountryPage;
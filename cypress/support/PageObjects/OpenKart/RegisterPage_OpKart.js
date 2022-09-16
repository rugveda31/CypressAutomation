class RegisterPageOpKart{
    
    enterUsername(uname) {
        return cy.get("#input-username").type(uname)
    }

    enterFName(fname) {
        return cy.get("#input-firstname").type(fname) 
    }

    enterLName(lname) {
        return cy.get("#input-lastname").type(lname)
    }

    enterEMail(email) {
        return cy.get("#input-email").type(email)
    }

    enterCountry(country) {
        return cy.get("#input-country").select(country)
    }

    enterPassword(password) {
        return cy.get("#input-password").type(password)
    }
    
    clickSubmit() {
        return cy.get('#button-register > .hidden-xs').click()
    }
}

export default RegisterPageOpKart;
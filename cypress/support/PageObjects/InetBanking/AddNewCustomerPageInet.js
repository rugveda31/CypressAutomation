class AddNewCustomer{
    enterCustomerName(name) {
        return cy.get("input[name='name']").type(name)
    }

    clickGender() {
        return cy.get("input[value='m']").click()
    }

    enterDOB(dob) {
        return cy.get("input#dob").type(dob)
        
    }

    enterAddress(address) {
        return cy.get("[name='addr']").type(address)
    }

    enterCity(city) {
        return cy.get("input[name='city']").type(city)
    }

    enterState(state) {
        return cy.get("input[name='state']").type(state)
    }

    enterPIN(pin) {
        return cy.get("input[name='pinno']").type(pin)
    }

    enterMNumber(mnum) {
        return cy.get("input[name='telephoneno']").type(mnum)
    }

    enterEMail(email) {
        return cy.get("input[name='emailid']").type(email)
    }

    enterPassword(password) {
        return  cy.get("input[name='password']").type(password)
    }

    clickSubmit() {
        return cy.get("input[name='sub']").click()
    }

    checkSuccessMsg() {
        return cy.get('.heading3')
    }

    getCustomerID() {
        return cy.get('tbody > :nth-child(4) > :nth-child(2)')
    }

}

export default AddNewCustomer;
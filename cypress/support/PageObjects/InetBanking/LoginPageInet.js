class LoginPage {
    enterUserID(userid) {
        return cy.get("input[type='text']").type(userid)
    }

    enterPassword(pass) {
        return cy.get("input[type='password']").type(pass)
    }

    clickLogin() {
        return cy.get("input[type='submit']").click()
    }

    checkSuccessMsg() {
        return cy.get('td > .heading3')
    }
}

export default LoginPage;
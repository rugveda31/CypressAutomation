class LoginPageOpKart {
    getLoginText() {
        return cy.get("h1")
    }

    enterEmail(email) {
        return cy.get("input#input-email").type(email)
    }

    enterPassword(pass) {
        return cy.get("input#input-password").type(pass)
    }

    clickLogin() {
        return cy.get(':nth-child(1) > .hidden-xs').click()
    }

}

export default LoginPageOpKart;
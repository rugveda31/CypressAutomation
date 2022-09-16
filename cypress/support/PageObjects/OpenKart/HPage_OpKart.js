

class HomePageOpKart {
    
    clickRegister() {
        return cy.get('.btn.btn-black.navbar-btn').click()
    }

    clickLogin() {
        return cy.get(".btn.btn-link.navbar-btn").click()
    }

    
}

export default HomePageOpKart;

class TopDealsPage{
    dropDownPageSize(pick) {
        return cy.get('#page-menu').select(pick)
    }
}

export default TopDealsPage;
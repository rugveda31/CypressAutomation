//mngr436280
//tapejyh
// <reference types = “Cypress” />
import LoginPage from '../../support/PageObjects/InetBanking/LoginPageInet'
import HomePage from '../../support/PageObjects/InetBanking/HomePageInet'
import AddNewCustomer from '../../support/PageObjects/InetBanking/AddNewCustomerPageInet'
import AddNewAccount from '../../support/PageObjects/InetBanking/AddNewAccountInet'



describe('TS_InetBanking', function() {

    var cusID = ''

    beforeEach(function() {
        //cy.visit('https://demo.guru99.com/v4/index.php')
        cy.visit(Cypress.env('urlBank')+'/v4/index.php')

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          })
    })
/*
    //cypress is not closing the alert since alert is coming as cypress popup. So TC was failing since its not closing automatically
    it ('TC_Alert_No_Creds', function() {
        const lp = new LoginPage()
        lp.clickLogin()
        cy.on('window:alert',(str) =>
        expect(str).to.equal("User or Password is not valid")
        ) 
    })
*/
    it('TC_login', function(){
        const lp = new LoginPage()
        const hp = new HomePage()
        lp.enterUserID('mngr436280')
        lp.enterPassword('tapejyh')
        lp.clickLogin()
        
    /*    
        lp.checkSuccessMsg().then(function(element) {
            const res = element.text()
            cy.log(res)
            expect(res).to.equal('Welcome To Manager\'s Page of Guru99 Bank')
        })
    */
        lp.checkSuccessMsg().should('have.text','Welcome To Manager\'s Page of Guru99 Bank')
    })

    it('TC_AddNewCustomer', function() {
        const hp = new HomePage()
        const lp = new LoginPage()
        const anc = new AddNewCustomer()

        lp.enterUserID('mngr436280')
        lp.enterPassword('tapejyh')
        lp.clickLogin()

        hp.clickNewCustomer()

        anc.enterCustomerName('I R Muralidhar')
        anc.clickGender()
        anc.enterDOB('1997-01-31')  
        anc.enterAddress('Barampet')
        anc.enterCity('Narasaraopet')
        anc.enterState('Andhra Pradesh')
        anc.enterPIN('522601')
        anc.enterMNumber('9840331435')
        cy.randomString(1,5)
        anc.enterPassword('31113111')
        anc.clickSubmit()
/*
        anc.checkSuccessMsg().then(function(element) {
            const res = element.text()
            cy.log(res)
            expect(res).to.equal('Customer Registered Successfully!!!')
        })  
*/
        anc.checkSuccessMsg().should('have.text','Customer Registered Successfully!!!')

        anc.getCustomerID().then(function(element) {
            cusID = element.text()
            //cy.log(getText)
        })
    })

    it('TC_AddNewAccount', function() {
        const ana = new AddNewAccount()
        const hp = new HomePage()
        const lp = new LoginPage()
        
        lp.enterUserID('mngr436280')
        lp.enterPassword('tapejyh')
        lp.clickLogin()

        hp.clickNewAccount()

        ana.enterCusID(cusID)
        ana.clickAccType()
        ana.enterInitDeposit('1000')
        ana.clickSubmit()
    /*
        ana.checkSuccessMsg().then(function(element) {
            const res = element.text()
            cy.log(res)
            expect(res).to.equal('Account Generated Successfully!!!')
        })
    */
        ana.checkSuccessMsg().should('have.text','Account Generated Successfully!!!')
    })

})




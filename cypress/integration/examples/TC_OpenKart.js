import HomePageOpKart from '../../support/PageObjects/OpenKart/HPage_OpKart'
import RegisterPageOpKart from '../../support/PageObjects/OpenKart/RegisterPage_OpKart'
import WelcomePageOpKart from '../../support/PageObjects/OpenKart/WelcomePage_OpKart'
import SetupPinPageOpKart from '../../support/PageObjects/OpenKart/SetupPinPage_OpKart'
import AccountPageOpKart from '../../support/PageObjects/OpenKart/AccountPage_OpKart'
import LoginPageOpKart from '../../support/PageObjects/OpenKart/LoginPAge_OpKart'
import ConfirmPinPageOpKart from '../../support/PageObjects/OpenKart/ConfirmPinPage_OpKart'


var tc = require('../../support/commands')

describe ('TS_OpenKart',function() {

    beforeEach (function() {
        cy.visit('https://www.opencart.com/')
    })


    it ('TC_CreateAnAccount', function() {
        const hp = new HomePageOpKart()
        const rp = new RegisterPageOpKart()
        const wp = new WelcomePageOpKart()
        const spp = new SetupPinPageOpKart()
        const acp = new AccountPageOpKart()

        hp.clickRegister()
        cy.randomString(2,5)
        rp.enterFName('Rugveda')
        rp.enterLName('Inavolu')
        cy.randomString(3,3)
        rp.enterCountry('India')
        rp.enterPassword('Irm@12345')
        cy.wait(5000)
        rp.clickSubmit()
        cy.wait(1000)
        wp.getWelcomeMsg().should('have.text','Welcome to OpenCart, your account has been created')
        wp.clickContinue()
        cy.wait(1000)
        spp.enterPin('4132')
        spp.clickPinSumbit()
        cy.wait(1000)
        acp.getTextOnAccount().should('have.text','Welcome to OpenCart!')
    })

    it ('TC_LoginAccount', function() {

        const hp = new HomePageOpKart()
        const lp = new LoginPageOpKart()
        const cpp = new ConfirmPinPageOpKart()
        const acp = new AccountPageOpKart()

        hp.clickLogin()
        lp.getLoginText().should('have.text','Log in to your OpenCart account')

        lp.enterEmail("irmz123@gmail.com")
        lp.enterPassword("Irm@12345")
        lp.clickLogin()
        cy.wait(1000)
        cpp.enterPin('4132')
        cpp.clickContinue()
        acp.getTextOnAccount().should('have.text','Welcome to OpenCart!')

    })
})
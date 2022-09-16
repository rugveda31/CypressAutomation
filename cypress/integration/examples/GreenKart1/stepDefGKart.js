/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import CheckoutPage from '../../../../support/PageObjects/CheckoutPage'
import CountryPage from '../../../../support/PageObjects/CountryPage'
import TopDealsPage from '../../../../support/PageObjects/TopDealsPage';

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const hp=new HomePage()
const cp = new CheckoutPage()
const countrypage = new CountryPage()

Given ('I open GreenKart Page', () => {
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
    //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When ('I add item to cart', function() {
    hp.getSearch().type("ca")
    cy.findItem('Carrot')
    hp.getCartClick()

    cp.getCheckout()
    cy.wait(1000)
    cp.clickPlaceOrder()
})

//  And ('Validate the item added place order', function(){
//     cy.validateItem('Carrot')
//     cp.clickPlaceOrder()
// })


Then ('Select the country submit and verify Thankyou', function() {
    countrypage.selectCountry('India')
    countrypage.clickAgree()
    countrypage.clickProceed()

    cy.get('.wrapperTwo').contains('Thank you')
})
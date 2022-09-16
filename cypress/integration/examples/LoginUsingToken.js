// <reference types = “Cypress” />

describe ('TS_LoginUsingToken', function() {
    it ('TC_Login', function() {
        cy.LoginAPI().then(function() {
            cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad : function(window) 
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })

    })
})
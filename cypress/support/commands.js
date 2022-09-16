import AddNewCustomer from '../support/PageObjects/InetBanking/AddNewCustomerPageInet'
import RegisterPageOpKart from '../support/PageObjects/OpenKart/RegisterPage_OpKart'


Cypress.Commands.add('findItem',(Product) => {
    cy.get('div.products').find('div.product').each(($el, index, $list) => {
        const itemText = $el.find('h4.product-name').text()
        if (itemText.includes(Product)) {
            $el.find('button').click()
        }
    })
})

Cypress.Commands.add('selectListOfItems',() => {
    cy.get('div.products:visible').find('div.product').each(($el, index, $list) => {
      //  const itemText = $el.find('h4.product-name').text()
        $el.find('button').click()
    })
})

Cypress.Commands.add('validateItem',(Product) => {
    cy.get('table tr td:nth-child(2)').each(($el, index, $list) => {
        const getText = $el.text()
        if (getText.includes(Product)) {
            cy.get('tr td:nth-child(2)').eq(index).next().next().then(function(price) {
                const priceText = price.text()
                expect(priceText).to.equal('56')
            })
        }
    })   
})

Cypress.Commands.add('vaildateSum',() => {
    var sum = 0
    cy.get('table tr td:nth-child(4)').each(($el, index, $list) => {
        var getPriceText = $el.text()
        getPriceText = getPriceText.trim()
        if (index > 0) {
            cy.log(getPriceText) 
            sum = Number(sum)+Number(getPriceText)
        }
    
    }).then(function(){
        cy.log(sum)
    })
    cy.get('span.totamt').then(function(element){
        const res = element.text()
        var total = res.trim()
        expect(Number(total)).to.equal(sum)
    })
})

var getQuantityfromCart=''
Cypress.Commands.add('getQuantityValue', () => {
    cy.get("div[class='cart-preview active'] div div p[class='quantity']").then(function(element) {
        getQuantityfromCart = element.text()
        getQuantityfromCart = getQuantityfromCart.split(" ")
        getQuantityfromCart = getQuantityfromCart[0].trim()
        cy.log("getText1 ", getQuantityfromCart)
    })
})

Cypress.Commands.add('validateQuantity', () => {
    var quantityInTable=''
    
    cy.get('tr td:nth-child(3)').eq('1').then(function(quantity) {
        quantityInTable = quantity.text()
    }).then(function() {
        expect(getQuantityfromCart).to.equal(quantityInTable)
    })
})

Cypress.Commands.add('calculateTotalPriceOfEachProductAndValidateIt', () => {
    var productPrice = ''
    var productTotal = ''
    var quantity = ''
    var calculatedPrice = ''
    cy.get("ul.cart-items:visible").find('li.cart-item').each(($el, index, $list) => {
        productPrice = $el.find('.product-info .product-price').text()
        quantity = $el.find('.product-total .quantity').text()
        quantity = quantity.split(' ')
        quantity = quantity[0].trim()
        //cy.log('price', productPrice, 'quantity', quantity)
        calculatedPrice = Number(productPrice)*Number(quantity) 
        //cy.log("calculate",calculatedPrice)

        productTotal = $el.find('.product-total .amount').text()
        //cy.log("product total",productTotal)
        expect(Number(calculatedPrice)).to.equal(Number(productTotal))

    })
})

Cypress.Commands.add('getInvalidDiscountFromProductList',() => {
    cy.get('table tr td:nth-child(1)').each(($el, index, $list) => {
        var getProductName = $el.text()
        var getPrice = $el.next().text()
        var getDiscountPrice = $el.next().next().text()
         if (Number(getPrice) < Number(getDiscountPrice)) {
            cy.log(getProductName, getPrice, getDiscountPrice,'Discount Price is higher than Price which should modify!!!')
         }
    })
})

Cypress.Commands.add('paginationValidation', () => {
    cy.get("ul.pagination.pull-right li").each(($el, index, $list) => {
        var text = $el.text()
        text = text.trim()
        //cy.log(index, text)
        if (index < 2) {
            cy.get("ul.pagination.pull-right li").eq(index).should('not.be.enabled')
        }
        else {
            cy.get("ul.pagination.pull-right li").eq(index).should('not.be.disabled')
        }
        if (text.includes('2')) {
            cy.get("ul.pagination.pull-right li a").eq(index).click()
        }
        cy.get("ul.pagination.pull-right li").eq(index).should('not.be.disabled')
    })
})

Cypress.Commands.add('validateRowSize', (enteredSize) => {
    var rowSize=''
    cy.get('table tr').then(function(row) {
        rowSize = row.length
    }).then(function() {
        cy.log(rowSize)
        expect(rowSize).to.equal(Number(enteredSize))
    })
})
const anc = new AddNewCustomer()
const rp = new RegisterPageOpKart()


Cypress.Commands.add('randomString',(input, length) => {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    cy.log(result)
    
    if (input == 1)
        anc.enterEMail('a'+ result +'@gmail.com')
    else if (input == 2) {
        rp.enterUsername('i'+ result.slice(2))
    }
    else if (input == 3) {
        rp.enterEMail('irm'+ result.slice(2) + '123@gmail.com')
    }
})

Cypress.Commands.add('LoginAPI', () => {
    //cy.request("POST", "https://rahulshettyacademy.com/client/auth/login", {"userEmail":"irmuralidhar@gmail.com","userPassword":"313131@Rs"})
    
    cy.request({
        method: 'POST',
        url: 'https://rahulshettyacademy.com/client/auth/login',
        body: {userEmail: "irmuralidhar@gmail.com",
                userPassword:'313131@Rs'},
      })
    .then(function(response) {
        //expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })
})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

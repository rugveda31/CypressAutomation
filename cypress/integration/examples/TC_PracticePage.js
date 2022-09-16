// <reference types = “Cypress” />

describe("TS_PracticePage",function(){

    it ('TC1',function(){

        //url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Raido Buttons
        cy.get("label input[value='radio1']").check().should('have.value','radio1').should('be.checked')
        cy.get("label input[value='radio2']").should('have.value','radio2').should('not.be.checked')
        
        //Searchable drop down
        cy.get("input[placeholder='Type to Select Countries']").type('ind')
        cy.get('li div.ui-menu-item-wrapper').each(($el, index, $list) => {
            const getText = $el.text()
            cy.log(getText)
            if (getText.includes('India')) {
                $el.click()
            }
        }) 
        cy.get("input[placeholder='Type to Select Countries']").should('have.value','India')

        //Select drop down
        cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')

        //Check box
        cy.get("input#checkBoxOption3").check().should('be.checked')

        //Child Tab/Window
        //cy.get('button#openwindow').invoke('removeAttr','target').click()
        cy.get('a#opentab').invoke('removeAttr','target').click()

        //Navigate
        cy.go('back')

        //Search bar
        cy.get('input#name').type('Inavolu Rugveda Muralidhar')

        //Alert
        cy.get('input#alertbtn').click()
        cy.on('window:alert',(str) =>
        expect(str).to.equal("Hello Inavolu Rugveda Muralidhar, share this practice page and share your knowledge")
        ) 
        
        //table

        cy.get('.tableFixHead table#product tr td:nth-child(1)').each(($el, index,$list) => {
            var name = $el.text()
            let pos=''
            let city =''
            let amt =''
            if (name.includes('Jack')) {

                cy.get('.tableFixHead table#product tr td:nth-child(1)').eq(index).next().each(($el, index,$list) => {
                    pos = $el.text()
              //  })
                    cy.get('.tableFixHead table#product tr td:nth-child(1)').eq(index).next().next().each(($el, index,$list) => {
                        city = $el.text()
               // })
                        cy.get('.tableFixHead table#product tr td:nth-child(1)').eq(index).next().next().next().each(($el, index,$list) => {
                            amt = $el.text()
                //})
                        cy.log(name, pos, city, amt)
                }) }) })
            }
        })
        var sum = 0 
        var amt1 = ''
        cy.get('.tableFixHead table#product tr td:nth-child(1)').next().next().next().each(($el, index,$list) => {
            amt1 = $el.text()
            amt1 = amt1.trim()
            //cy.log(amt)
            sum = Number(sum) + Number(amt1)
        }).then(function(){
            cy.log(sum)
        })

        cy.get('div.totalAmount').then(function(element){
            var res = element.text()
            res = res.split(" ")
            res = res[4].trim()
            expect(Number(res)).to.equal(sum)
        })
    })
})
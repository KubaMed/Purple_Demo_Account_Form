

//Happy flow automated test case. 

describe('My First Test', function(){
    it('Visit the page', function(){
        cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
        

        //get input field firstname, write last data, check written data
        cy.get('input[name = "firstname"]')
            .type('FirstnameInputName')
            .should('have.value', 'FirstnameInputName')

    
        //get input field lastname, write last data, check written data
        cy.get('input[name = "lastname"]')
            .type('FirstnameInputName')
            .should('have.value', 'FirstnameInputName')


        //get input field phone, write data, check written data
        cy.get('input[name = "phone"]')
            .type('666 666 666')
            .should('have.value', '666 666 666')

        //get input field for countryLaber, write data, check written data
        cy.get('input[id = "countryLabel"]')
            .type('Czech Republic (Česká Republika)')
            .should('have.value', 'Czech Republic (Česká Republika)')

        // get input for email, write data, check written data
        cy.get('input[name = "email"]')
        .type('test@test.test')
        .should('have.value', 'test@test.test')

        //get list "platform", select value mt4
        cy.get('select[name = "platform"]').select('mt4')

        //get list "accountType", select value standard
        cy.get('select[name = "accountType"]').select('standard')
        
        //get list "leverage", select value 1:100
        cy.get('select[name = "leverage"]').select('1:100')
        
        //get list "currency", select value JPY
        cy.get('select[name = "currency"]').select('JPY')

        //get input field for deposit, write value, check value
        cy.get('input[name = "deposit"]')
            .type('1500')
            .should('have.value', '1500')

        //check if check box is not selected by default
        cy.get('#iAgreeDemo.checkbox').should('not.be.checked')
        
        //check the checkbox
        cy.get('#iAgreeDemo.checkbox').check().should('be.checked')

        // get bubmit button, click on it
        cy.get('input[type = "submit"]').click()

        cy.url().should('include', 'https://portal.axiory.com/jp/register/?lng=ja&step=completed-mt4')

    })
})
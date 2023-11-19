/// <reference types="cypress"/>



describe('teste kigi', function(){
    beforeEach(function(){
      
       cy.visit('https://app.kigi.com.br/#!/login');
       cy.wait(4000)
      cy.get('input[name="email"]').eq(1).clear().type(Cypress.env('login'))
      cy.get('input[name="passw"]').type(Cypress.env('senha'))
      cy.get('form.ng-dirty > mbg-login-send-button.ng-isolate-scope > .send-button > .text-container').click({force: true})
      cy.get('.organizations-container > :nth-child(1)').click({force: true})
      cy.get('.bottom > .ng-isolate-scope > .send-button > .text-container').click({force: true})
       
   });
   Cypress.on('uncaught:exception', (err, runnable) => {
       
       return false
     })
     const clientes = require('../fixtures/cliente.json')
    clientes.forEach(cliente =>{
        it('cliente', ()=>{
            cy.wait(13000)
            cy.get(':nth-child(1) > mb-sm-subcategory.ng-scope > [sm-sub-category=""] > .mg-smsc-container > :nth-child(2) > .ng-scope.ng-isolate-scope > .ng-isolate-scope > a.mb > .mb > .mb-smb-text').click({force: true})
            cy.get('.btn-create').click({force: true})
            cy.get('.name > .mbg-input-wrapper > .ng-pristine').type(cliente.nome)
            cy.get('.mbg-btn-form-wrapper > button').click({force: true})
            cy.contains('button','Sim').click({force: true})
            cy.intercept( 'https://api.kigisistemas.com.br/mobiage-api/api/individual').as('valor')
            cy.wait('@valor').its('response.statusCode').should('eq', 200)
        })
    })
  
   
  
  
  });
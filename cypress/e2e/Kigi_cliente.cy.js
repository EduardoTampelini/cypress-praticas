/// <reference types="cypress"/>
import Cadastro from '../support/pages/cliente/pagina-cliente'


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
    
        it('cliente', ()=>{
           //exemplo de teste criado utilizando o Page Object
            Cadastro.realizarCadastro();
           
        })
    
  
   
  
  
  });
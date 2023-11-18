/// <reference types="cypress"/>



describe('teste kigi', function(){
  beforeEach(function(){
    
     cy.visit('https://app.kigi.com.br/#!/login');
     cy.wait(4000)
    cy.get('input[name="email"]').eq(1).clear().type('suporte13@grands.com.br')
    cy.get('input[name="passw"]').type('123')
    cy.get('form.ng-dirty > mbg-login-send-button.ng-isolate-scope > .send-button > .text-container').click({force: true})
    cy.get('.organizations-container > :nth-child(1)').click({force: true})
    cy.get('.bottom > .ng-isolate-scope > .send-button > .text-container').click({force: true})
     
 });
 Cypress.on('uncaught:exception', (err, runnable) => {
     
     return false
   })
 it('produto', ()=>{
     cy.wait(13000)
     cy.get(':nth-child(1) > mb-sm-subcategory.ng-scope > [sm-sub-category=""] > .mg-smsc-container > :nth-child(1) > .ng-scope.ng-isolate-scope > .ng-isolate-scope > a.mb > .mb > .mb-smb-text').click({force: true})
     cy.wait(8000)
     cy.get(':nth-child(3) > :nth-child(8) > .flex > .ng-isolate-scope > .mbg-dropdown-wrapper > .dropdown > .title-option > svg').click({force: true})
     cy.get(':nth-child(3) > :nth-child(8) > .flex > .ng-isolate-scope > .mbg-dropdown-wrapper > .dropdown > .dropdown-menu > :nth-child(2) > a').click({force: true})
     cy.get('[style="background: rgb(245, 245, 245);"] > :nth-child(5) > .stock-info').invoke('text').then(($vlr) =>{
        
        Cypress.env('QtdEstoque',  $vlr.charAt(1))
        cy.log(Cypress.env('QtdEstoque'))

     })
     
 })
 it('produto entrada', ()=>{
     cy.wait(13000)
     cy.get(':nth-child(6) > mb-sm-subcategory.ng-scope > [sm-sub-category=""] > .mg-smsc-container > :nth-child(1) > .ng-scope.ng-isolate-scope > .ng-isolate-scope > a.mb > .mb > .mb-smb-text').click({force: true})
     cy.wait(8000)
     cy.get('.place').type('a')
     cy.contains('span', 'A.m.c. Textil Ltda.').click({force: true})
     cy.wait(3000)
     cy.get('.mbg-btn-form-wrapper > button').click({force: true})
     cy.wait(5000)
     cy.contains('button', ' Continuar > ').click({force: true})
     cy.wait(4000)
     cy.get('.search-text').type('4921792{enter}')
     cy.get('.btn-update-list').click({force: true})
     cy.get('.mbg-btn-form-wrapper > button').click({force: true})
     cy.get('.cancel-link').click({force: true})
     cy.get('.mbg-close-modal > .fas').click({force: true})
     cy.wait(4000)
    

 })
 it('produtovalidar estoque', ()=>{
     cy.wait(13000)
     cy.get(':nth-child(1) > mb-sm-subcategory.ng-scope > [sm-sub-category=""] > .mg-smsc-container > :nth-child(1) > .ng-scope.ng-isolate-scope > .ng-isolate-scope > a.mb > .mb > .mb-smb-text').click({force: true})
     cy.wait(8000)
     cy.get(':nth-child(3) > :nth-child(8) > .flex > .ng-isolate-scope > .mbg-dropdown-wrapper > .dropdown > .title-option > svg').click({force: true})
     cy.get(':nth-child(3) > :nth-child(8) > .flex > .ng-isolate-scope > .mbg-dropdown-wrapper > .dropdown > .dropdown-menu > :nth-child(2) > a').click({force: true})
     cy.get('[style="background: rgb(245, 245, 245);"] > :nth-child(5) > .stock-info').invoke('text').then(($vlr)=>{
        expect( Number($vlr.charAt(1))).to.eq(Number(Cypress.env('QtdEstoque'))+1)
     })
 })

 it('cliente', ()=>{
     cy.wait(13000)
     cy.get(':nth-child(1) > mb-sm-subcategory.ng-scope > [sm-sub-category=""] > .mg-smsc-container > :nth-child(2) > .ng-scope.ng-isolate-scope > .ng-isolate-scope > a.mb > .mb > .mb-smb-text').click({force: true})
     cy.get('.btn-create').click({force: true})
     cy.get('.name > .mbg-input-wrapper > .ng-pristine').type('Teste cliente')
     cy.get('.mbg-btn-form-wrapper > button').click({force: true})
     cy.contains('button','Sim').click({force: true})
     cy.intercept( 'https://api.kigisistemas.com.br/mobiage-api/api/individual').as('valor')
     cy.wait('@valor').its('response.statusCode').should('eq', 200)
 })


});
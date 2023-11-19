/// <reference types="cypress"/>



describe('teste z-api', function(){
    

    it('z-api chats', ()=>{
        cy.request({
            method:'GET',
            url: Cypress.env('urlChats'),
           header: {
            'Client-Token': 'F9c6f9173c3fa45d0a945fd5274935cdbS'
           }
        }).then((resp) => {
           
            expect(resp.status).to.eq(200)
          })
    })
    it('z-api chats 405', ()=>{
        cy.request({
            method:'GET',
            url: Cypress.env('urlEnvio'),
            failOnStatusCode: false
        }).then((resp) => {
           
            expect(resp.status).to.eq(405)
          })
    })
    it('z-api chats sem token', ()=>{
        cy.request({
            method:'GET',
            url: Cypress.env('urlChats'),
           
        }).then((resp) => {
           
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eqls({"error": "null not allowed"})
          })
    })


});
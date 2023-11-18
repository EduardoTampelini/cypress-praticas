/// <reference types="cypress"/>



describe('teste z-api', function(){
    

    it('z-api chats', ()=>{
        cy.request({
            method:'GET',
            url: 'https://api.z-api.io/instances/3B4420C35505608BDC24166F1EEA881D/token/DBDBB00EEE948C19CB042E81/chats',
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
            url: 'https://api.z-api.io/instances/3B4420C35505608BDC24166F1EEA881D/token/DBDBB00EEE948C19CB042E81/send-text',
            failOnStatusCode: false
        }).then((resp) => {
           
            expect(resp.status).to.eq(405)
          })
    })
    it('z-api chats sem token', ()=>{
        cy.request({
            method:'GET',
            url: 'https://api.z-api.io/instances/3B4420C35505608BDC24166F1EEA881D/token/DBDBB00EEE948C19CB042E81/chats',
           
        }).then((resp) => {
           
            expect(resp.status).to.eq(200)
            expect(resp.body).to.eqls({"error": "null not allowed"})
          })
    })


});
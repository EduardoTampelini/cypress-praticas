const el = require('./elements').elements;

class Cadastro {
    realizarCadastro(){
        const clientes = require('../../../fixtures/cliente.json')
    clientes.forEach(cliente =>{
        
    cy.wait(13000)
    cy.get(el.opcaoProduto).click({force: true})
    cy.get(el.botaoCriar).click({force: true})
    cy.get(el.inputNome).type(cliente.nome)
    cy.get(el.botaoConcluir).click({force: true})
    cy.contains('button','Sim').click({force: true})
    cy.intercept( 'https://api.kigisistemas.com.br/mobiage-api/api/individual').as('valor')
    cy.wait('@valor').its('response.statusCode').should('eq', 200)
    cy.get('.mb-t-logo').click({force: true})
    cy.wait(13000)
    })
    }
}

export default new Cadastro();
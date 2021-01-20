/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.clock()
    cy.visit('http://localhost:3000');
    cy.tick(5000)
  });

  it('verificando elemetos de la busqueda inicial', () => {
    cy.get('#searchMusic').should('exist');
    cy.get('#searchMusic').type('al2');
    cy.tick(5000)
    cy.clock().then((clock) => {
      cy.get('.item-card-music').should('exist');
      clock.restore()
    })
  });

});
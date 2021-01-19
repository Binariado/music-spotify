/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('verificando elemetos de la busqueda inicial', () => {
    cy.get('.text-blue-600').should('exist');
  });

});
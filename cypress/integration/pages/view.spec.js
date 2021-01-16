/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should find the title of the homepage', () => {
    cy.get('.text-blue-600').contains('This should be very blue.');
  });
});
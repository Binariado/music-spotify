

/// <reference types="cypress" />

context('Home', () => {
  it('status api', () => {
    cy.request('http://localhost:3000/api/music/token/set').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  });

});
/// <reference types="cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('.scrollIntoView() - scroll an element into view', () => {
    cy.get('.splash a').should('be.visible')
    cy.get('.splash a').click()

    cy.get('#twan-storie').should('be.visible')
  })

  it('.select() - select an option in a <select> element', () => {
    cy.get('.splash a').click()

    // at first, no option should be selected
    cy.get('select#posts option:selected').should('have.text', 'Nieuwste bericht eerst')

    cy.get('select#posts').select('Oudste bericht eerst').should('have.value', 'ASC')
  })
})

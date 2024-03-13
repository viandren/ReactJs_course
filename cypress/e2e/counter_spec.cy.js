describe('Counter spec', () => {
  it('test Counter component', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').contains('increase').click()
    cy.get('button').contains('increase').click()
    cy.get('button').contains('increase').click()
    cy.get('p').should('contain', '18')
    cy.get('button').contains('decrease').click()
    cy.get('p').should('contain', '17')
  })
})
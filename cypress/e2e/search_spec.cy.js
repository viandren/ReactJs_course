describe('SearchForm spec', () => {
  it('test SearchForm component', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=searchInput]').type('{selectall}{backspace}');
    cy.get('input[name=searchInput]').type("test search")
    cy.get('button').contains('Search').click()
    cy.get('h5').should('contain', 'Results for test search will be displayed here.')
  })
})
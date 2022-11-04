describe('Error handling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/NotFound')
  })

  it('should display the Not Found component', () => {
    cy.get('[class*=error-wrapper]')
    .should('be.visible')
    .get('h4')
    .should('be.visible')
    .contains('404')
    .get('h2')
    .should('be.visible')
    .contains('Don\'t waste another')
    .get('h2')
    .should('be.visible')
    .contains('NY | Min')
    .get('h5')
    .should('be.visible')
    .contains('Let\'s find something to talk about . . .')
    .get('[class*=stat-4040-logo]')
    .should('be.visible')
  })
})
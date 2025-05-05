describe('Load website', () => {
  it('website loads', () => {
    cy.visit('http://localhost:4200/products/list')
  })
})

describe('Delete button', () => {
  it('Delete a product', () => {
    cy.visit('http://localhost:4200/products/list')
    cy.scrollTo('bottom')
    cy.contains('.card-title', 'Durian')
    cy.get(':nth-child(11) > .card-body > .button-container > .btn-danger').contains('Delete').click()
  })
})
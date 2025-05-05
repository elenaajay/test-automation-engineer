describe('Load website', () => {
  it('website loads', () => {
    cy.visit('http://localhost:4200/products/list')
  })
})

describe('Add products', () => {
  it('Add product', () => {
    cy.visit('http://localhost:4200/products/list')
    cy.get(':nth-child(1) > .card-body > .button-container > .btn-success').contains('Order').click()
    cy.get('#product-quantity').type('2')
    cy.get('.btn').contains('Create Order').click()
  })
})
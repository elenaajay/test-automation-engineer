describe('Load website', () => {
  it('website loads', () => {
    cy.visit('http://localhost:4200/products/list')

  })
})

describe('Order Successfully Deleted', () => {
  it('Order Deleted', () => {
    cy.visit('http://localhost:4200/orders/list')
    // cy.contains('td', 'Red Apple')
    cy.get('.btn-danger').contains('Delete').click
  })
})
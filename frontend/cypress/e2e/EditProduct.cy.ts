describe('Load website', () => {
  it('website loads', () => {
    cy.visit('http://localhost:4200/products/list')
  })
})


describe('Product Successfully edited', () => {
  it('Product edited', () => {
    cy.visit('http://localhost:4200/products/list')
    cy.get('a[href="/products/update/1"]').contains('Edit').click()
    cy.get('#product-price').clear()
    .type('6')
    cy.get('.btn').contains('Update').click()
    cy.contains('.card-title', '(MYR6.00)')
  })
})
describe('Load website', () => {
  it('website loads', () => {
    cy.visit('http://localhost:4200/products/list')
  })
})

describe('Products page', () => {
  it('Create a product', () => {
    cy.visit('http://localhost:4200/products/list')
    cy.get('.btn').click()
    cy.get(':nth-child(1) > .form-label').contains('Product Name')
    cy.get('#product-name').type('Durian ')
    cy.get(':nth-child(2) > .form-label').contains('Product Description')
    cy.get('#product-description').type('Durian Musang King')
    cy.get('#product-price').click()
    cy.get('#product-price').type('12')
    cy.get('.btn').contains('Create').click()
  })
})


describe('Product Successfully created', () => {
  it('Product Created', () => {
    cy.visit('http://localhost:4200/products/list')
    cy.scrollTo('bottom')
    cy.contains('.card-title', 'Durian')
  })
})
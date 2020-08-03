describe('Product Details', () => {
  beforeEach(() => {
    cy.visit('/products')
    cy.get('[data-testid=icon]').click()
  })

  it('opens product details', () => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6

    cy.get('#name').type(itemText)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(itemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()

    cy.get('li').click()

    cy.get('h1').should('contain', itemText)
    cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
    cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
  })
})

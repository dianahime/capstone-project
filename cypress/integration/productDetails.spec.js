describe('Product Details', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.sc-AxgMl').click()
  })

  it('opens product details', () => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6

    cy.get('#name').type(itemText)
    cy.get('#date').type(itemOpeningDate)
    cy.get('#month').type(itemMonth).type('{enter}')

    cy.get('li').click()

    cy.get('h1').should('contain', itemText)
    cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
    cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
  })
})

describe('Menu Popover', () => {
  beforeEach(() => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6

    cy.visit('/products')
    cy.get('[data-testid=icon]').click()
    cy.get('#name').type(itemText)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(itemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()

    cy.get('li').click()
  })

  it('opens menu popover and clicks on options', () => {
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-pen').click()
    cy.contains('Cancel').click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-trash').click()
    cy.contains('Cancel').click()
  })

  it('opens Edit and changes the product', () => {
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-pen').click()

    cy.get('#name').focus().clear();
    cy.get('#name').type('Nivea face cream')
    cy.get('#month').focus().clear();
    cy.get('#month').type(12)

    cy.contains('Save').click()

    cy.get('h1').should('contain', 'Nivea face cream')
    cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
    cy.get('.expiring-date').should('contain', 'Expires: 27.05.2021')
  })

  it('opens Delete and removes the product', () => {
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-trash').click()
    cy.get('[data-testid=delete]').click()

    cy.get('li').should('have.length', 0)
  })
})
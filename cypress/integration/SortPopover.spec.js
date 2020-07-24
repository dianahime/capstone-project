describe('Sort Popover', () => {
  beforeEach(() => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 3

    cy.visit('/')
    cy.get('[data-testid=icon]').click()

    cy.get('#name').type(itemText)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(itemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type('Balea night face cream long product name')
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(12)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type('Hairspray')
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(6)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()

    cy.get('li').should('have.length', 3)
  })

  it('opens sort popover and sorts alphabetically', () => {
    cy.get('.fa-sort-amount-down').click()
    cy.get('.fa-sort-alpha-down').click()

    cy.get('li').first().should('contain', 'Balea night face cream long product name')

  })

  it('opens sort popover and sorts by recently added', () => {
    cy.get('.fa-sort-amount-down').click()
    cy.contains('Recently added').click()

    cy.get('li').first().should('contain', 'Hairspray')
  })

  it('opens sort popover and sorts by soon to expire', () => {
    cy.get('.fa-sort-amount-down').click()
    cy.get('.fa-exclamation-circle').click()

    cy.get('li').first().should('contain', 'Nivea body lotion')
  })

})
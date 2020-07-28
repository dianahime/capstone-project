describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type(itemText)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(itemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()
  })

  it('shows new product in two lists', () => {
    cy.get('li').should('have.length', 2)
  })

  it('shows products in order according to the list criteria', () => {
    const secondItemName = 'Dove soap'
    const secondOpeningDate = '2020-05-27'
    const secondMonth = 12

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type(secondItemName)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(secondOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(secondMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.get('[data-testid=close]').click()

    cy.get('li').should('have.length', 4)
    cy.get('li').first().should('contain', secondItemName)
    cy.get('li').eq(2).should('contain', 'Nivea body lotion')
  })
})
describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('focuses input on load', () => {
    cy.focused().should('have.id', 'name')
  })

  it('accepts input', () => {
    const typedText = 'Dove shower gel'
    const typedDate = '2020-05-27'
    const typeMonth = 12

    cy.get('#name').type(typedText).should('have.value', typedText)
    cy.get('#date').type(typedDate).should('have.value', typedDate)
    cy.get('#month').type(typeMonth).should('have.value', typeMonth)
  })

  context('Form submission', () => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6
    it('Adds a new product on submit', () => {
      cy.get('#name').type(itemText)
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth).type('{enter}')

      cy.get('#name').should('have.value', '')
      cy.get('#date').should('have.value', '')
      cy.get('#month').should('have.value', '')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    })
  })
})

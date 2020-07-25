describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-testid=icon]').click()
  })

  it('opens form', () => {
    cy.get('[data-testid=icon]').click()
  })

  it('accepts input', () => {
    const typedText = 'Dove shower gel'
    const typedDate = '2020-05-27'
    const typeMonth = 12

    cy.get('#name').type(typedText).should('have.value', typedText)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(typedDate).should('have.value', typedDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(typeMonth).should('have.value', typeMonth)
  })

  context('Form submission', () => {
    const itemText = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 6

    it('adds a new product on submit', () => {
      cy.get('#name').type(itemText)
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.get('#name').should('have.value', '')
      cy.get('#date').should('have.value', '')
      cy.get('#month').should('have.value', '')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    })

    it('adds a new product with additional fields on submit', () => {
      cy.get('#name').type(itemText)
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('#size').type('50ml')
      cy.get('#price').type('3,55$')
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.get('#name').should('have.value', '')
      cy.get('#date').should('have.value', '')
      cy.get('#month').should('have.value', '')
      cy.get('#size').should('have.value', '')
      cy.get('#price').should('have.value', '')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    })

    it('adds multiple products', () => {
      cy.get('#name').type(itemText)
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.get('[data-testid=icon]').click()
      cy.get('#name').type('Nivea night face cream long product name')
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.get('[data-testid=icon]').click()
      cy.get('#name').type('Hairspray')
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.get('li').should('have.length', 3)
    })

    it('has an info popover', () => {
      cy.get('[data-testid=nameNext]').click()
      cy.get('[data-testid=dateNext]').click()
      cy.get('.fa-question').click()
    })

    it('saves products to localStorage', () => {
      cy.get('#name').type(itemText)
      cy.get('[data-testid=nameNext]').click()
      cy.get('#date').type(itemOpeningDate)
      cy.get('[data-testid=dateNext]').click()
      cy.get('#month').type(itemMonth)
      cy.get('[data-testid=monthNext]').click()
      cy.get('[data-testid=save]').click()
      cy.get('[data-testid=close]').click()

      cy.visit('/')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    })
  })
})

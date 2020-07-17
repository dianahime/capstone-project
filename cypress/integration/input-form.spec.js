describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.sc-AxgMl').click()
  })

  it('opens form', () => {
    cy.get('.sc-AxgMl').click()
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

    it('adds a new product on submit', () => {
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

    it('adds a new product with additional fields on submit', () => {
      cy.get('#name').type(itemText)
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth)
      cy.get('#size').type('50ml')
      cy.get('#price').type('3,55$').type('{enter}')

      cy.get('#name').should('have.value', '')
      cy.get('#date').should('have.value', '')
      cy.get('#month').should('have.value', '')
      cy.get('#size').should('have.value', '')
      cy.get('#price').should('have.value', '')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
      cy.get('.size').should('contain', 'Size: 50ml')
      cy.get('.price').should('contain', '3,55$')
    })

    it('adds multiple products', () => {
      cy.get('#name').type(itemText)
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth).type('{enter}')

      cy.get('.sc-AxgMl').click()
      cy.get('#name').type('Nivea night face cream long product name')
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth).type('{enter}')

      cy.get('.sc-AxgMl').click()
      cy.get('#name').type('Hairspray')
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth).type('{enter}')

      cy.get('li').should('have.length', 3)
    })

    it('has an info popover', () => {
      cy.get('.fa').click()
      cy.get('.content').should(
        'contain',
        'The time in months when the product will remain in good condition after you have used the product for the first time. A symbol of an open cream jar is usually used and the time in months can be inside the symbol or alongside it.'
      )
    })

    it('saves products to localStorage', () => {
      cy.get('#name').type(itemText)
      cy.get('#date').type(itemOpeningDate)
      cy.get('#month').type(itemMonth).type('{enter}')

      cy.visit('/')

      cy.get('li').should('have.length', 1).and('contain', itemText)
      cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
      cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    })
  })
})

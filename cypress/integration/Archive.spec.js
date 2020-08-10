import localForage from 'localforage'

describe('Archive', () => {
  beforeEach(() => {
    localForage.clear()

    cy.visit('/')
    const itemName = 'Nivea body lotion'
    const itemOpeningDate = '2020-05-27'
    const itemMonth = 12

    const secondItemName = 'Hairspray'
    const secondItemOpeningDate = '2020-05-27'
    const secondItemMonth = 1

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type(itemName)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(itemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(itemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
    cy.wait(500)

    cy.get('[data-testid=icon]').click()
    cy.get('#name').type(secondItemName)
    cy.get('[data-testid=nameNext]').click()
    cy.get('#date').type(secondItemOpeningDate)
    cy.get('[data-testid=dateNext]').click()
    cy.get('#month').type(secondItemMonth)
    cy.get('[data-testid=monthNext]').click()
    cy.get('[data-testid=save]').click()
  })

  it('shows expiration alert', () => {
    cy.contains(/has expired:/i).should('be.visible')
  })

  it('moves the expired product to archive from alert message', () => {
    cy.contains('Add to Archive').click()
    cy.visit('/products/archive')
    cy.get('li').first().should('contain', 'Hairspray')
  })

  it('moves the product to archive from menu popover', () => {
    cy.get('li').first().click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-archive').click()

    cy.visit('/products/archive')
    cy.get('li').first().should('contain', 'Hairspray')
  })

  it('unarchives the product', () => {
    cy.get('li').first().click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-archive').click()

    cy.visit('/products/archive')
    cy.get('li').first().click()
    cy.get('.fa-ellipsis-v').click()
    cy.get('.fa-undo').click()

    cy.visit('/products/archive')
    cy.get('li').should('contain', 'Hairspray')
  })
})

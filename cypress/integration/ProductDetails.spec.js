describe('Product Details', () => {
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

    cy.get('li').click()
  })

  it('opens product details', () => {
    const itemText = 'Nivea body lotion'
    cy.get('h1').should('contain', itemText)
    cy.get('.opening-date').should('contain', 'Opened: 27.05.2020')
    cy.get('.expiring-date').should('contain', 'Expires: 27.11.2020')
    cy.contains(/Used up/i)
    cy.get('[data-testid=starRating]').should('be.visible')
    cy.contains('Add comment')
  })

  it('adds a comment', () => {
    const titleText = 'test title'
    const commentText = 'test comment'
    cy.contains('Add comment').click()
    cy.get('#title').type(titleText).should('have.value', titleText)
    cy.get('#comment').type(commentText).should('have.value', commentText)
    cy.contains('Save').click()
    cy.contains(titleText)
    cy.contains(commentText)
  })

  it('closes the comment form', () => {
    cy.contains('Add comment').click()
    cy.contains('Cancel').click()
    cy.contains('Add comment')
  })

  it('updates a comment', () => {
    const titleText = 'test title'
    const commentText = 'test comment'
    const changedCommentText = 'It has been changed'

    cy.contains('Add comment').click()
    cy.get('#title').type(titleText).should('have.value', titleText)
    cy.get('#comment').type(commentText).should('have.value', commentText)
    cy.contains('Save').click()

    cy.get('.fa-pen').click()
    cy.get('#comment').clear()
    cy.get('#comment').type(changedCommentText)
    cy.contains('Save').click()

    cy.contains(changedCommentText)
  })

  it('Adds an used up date', () => {
    const usedUpDate = '2020-07-27'
    cy.get('.fa-square').click()
    cy.get('.usedUpDate').type(usedUpDate)
    cy.contains('Save').click()
    cy.contains('Yes').click()
    cy.contains(/used up after/i)
  })
})

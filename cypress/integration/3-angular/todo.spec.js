/// <reference types="cypress" />

describe('Ez a root test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
    cy.get('.test-button').click()

  })

  // Tesz gomb lenyomása
  /*it('click on Test button', () => {
    cy.get('.test-button').click()
  })*/

  // felhasználónév megadása
  it('can type username', () => {
    const userName = 'racsbalazs'
    cy.get('.username-input')
    .type(`${userName}{enter}`)
     // .type('username').should('have.value', 'username')
    cy.get('.username-input')
      .should('have.value', `${userName}`)
  })

  it('can select gender', () => {
    cy.get('.gender-select').click()

    cy.get('.mat-option')
    .should('contain', 'Male')
    //.find('.mat-option-text', 'Male')
    cy.contains('Male')
    .click()
    })

    it('can write long text', () => {
      const message = 'Ez egy teszt üzenet! :D'
      cy.get('.message-textarea').click()
      .type(`${message}`)

      cy.get('.message-textarea')
      .should('have.value', `${message}`)

  })

})

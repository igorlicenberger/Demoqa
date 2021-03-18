/// <reference types="Cypress" />
const Locators = require('../../fixtures/Locators.json')

describe("Interactions", () => {
    beforeEach("Visit Demoqa", () => {
        cy.visit('/')
        cy.url().should("contains", "https://demoqa.com/")
    }),

    it("Sortable", () => {
        cy.visit("/")
        cy.get(Locators.Header.Interactions).click()
        cy.get(Locators.Interactions.Sortable).click() 
        cy.get(Locators.Interactions.Grid).click() 
        cy.get(Locators.Interactions.List).click() 

})
})


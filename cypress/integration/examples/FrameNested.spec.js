/// <reference types="Cypress" />
const Locators = require('../../fixtures/Locators.json')

describe("Frame", () => {
    beforeEach("Visit Demoqa", () => {
        cy.visit('/')
        cy.url().should("contains", "https://demoqa.com/")
    }),

    it("Nested Frame", () => {
        cy.visit("/")
        cy.get(Locators.Header.Frame).click()
        cy.get(Locators.Frame.Frames).click() 

})
})


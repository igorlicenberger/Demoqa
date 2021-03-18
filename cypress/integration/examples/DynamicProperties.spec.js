/// <reference types="Cypress" />
const Locators = require('../../fixtures/Locators.json')

describe("Dynamic Properties", () => {
    beforeEach("Visit Demoqa", () => {
        cy.visit('/')
        cy.url().should("contains", "https://demoqa.com/")
    }),

    it("Dynamic Properties ", () => {
        cy.visit("/")
        cy.get(Locators.Header.Elements).click()
        cy.get(Locators.Elements.DynamicProperties).click()

})
})


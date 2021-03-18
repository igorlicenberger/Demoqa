/// <reference types="Cypress" />
const Locators = require('../../fixtures/Locators.json')

describe("Practice Form", () => {
    beforeEach("Visit Demoqa", () => {
        cy.visit('/')
        cy.url().should("contains", "https://demoqa.com/")
    }),

    it("Practice Form", () => {
        cy.visit("/")
        cy.get(Locators.Header.Form).click()
        cy.get(Locators.Form.PracticeForm).click()
        cy.get(Locators.PracticeForm.FirstName).type("Igor")
        cy.get(Locators.PracticeForm.LastName).type("Licenberger")
        cy.get(Locators.PracticeForm.Email).type("test12@gmail.com")
        cy.get(Locators.PracticeForm.Gender).click()
        cy.get(Locators.PracticeForm.Mobile).type("0601234567")
        cy.get(Locators.PracticeForm.Hobbies).click()
        cy.get(Locators.PracticeForm.Submit).click()

})
})


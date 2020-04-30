// describe === context, it === specify, beforeEach

describe("Test our form inputs", function() {

    beforeEach(function() {
        cy.visit("http://localhost:3000/");
    });

    it("adds text inputs", function () {
        cy.get('[data-cy="name"]').type("Jason Ours").should("have.value", "Jason Ours");
        cy.get('[data-cy="email"]').type("jason@jason.com").should("have.value", "jason@jason.com");
        cy.get('[data-cy="textarea"]').type("I want to help.").should("have.value", "I want to help.");
        cy.get("#positions").select("Yard Work").should("have.value", "Yard Work");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.contains('Submit').click();
    });
});


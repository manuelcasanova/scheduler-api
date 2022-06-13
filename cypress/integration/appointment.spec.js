describe("Appointments", () => {



  beforeEach(() => {
    cy.request("GET", "http://localhost:8001/api/debug/reset");

    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", () => {

    //Find add button and click on it.
    cy.get("[alt=Add]")
      .first()
      .click();

    //Get input field and type name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones")

    //Select interviewer
    cy.get("[alt='Sylvia Palmer']").click();

    //Finds the button and clicks
    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit an interview", () => {
    //Find edit button and click on it.
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true })
    //Click arguments. Forces the action, disables waiting for actionability. In this case, used because edit button appears on hover

    //Get input field and type name
    cy.get("[data-testid=student-name-input]").clear().type("Lydia Miller-Jones")

    //clear() clears the input


    //Select interviewer
    cy.get("[alt='Tori Malcolm']").click();

    //Finds the button and clicks
    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    //Find cancel button and click on it. Disable waiting for actionability
    cy.get("[alt=Delete]")
      .first()
      .click({ force: true })

      cy.contains("Confirm")
      .first()
      .click()

      cy.contains("Deleting")
      cy.contains("Deleting").should("not.exist");

      cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });


}); 
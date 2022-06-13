describe("Appointments", () => {

 beforeEach(() => {
  cy.request("GET", "http://localhost:8001/api/debug/reset");

  cy.visit("/");

  cy.contains("Monday");
 });

  it("should book an interview", () => {


    //Resets the DB to the beginning of the test.
    cy.request("GET", "http://localhost:8001/api/debug/reset")

    cy.visit("/");

    cy.contains("Monday");


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
}); 
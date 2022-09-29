describe("Check site is running correctly", () => {
  it("Run through all endpoints on the site to ensure all are running", () => {
    cy.visit("http://localhost:3001/");
    // To Login Page
    cy.get("a[href='/login']").click();
    // Back to home
    cy.get("a[href='../']").click();
    // To the 1st article
    cy.get("a[href*='0']").click();
    // Check article body is present
    cy.get('[id^=article-]').should("exist")
  });
});

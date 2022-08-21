describe("To test todo application", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should enter some text and check todo list", () => {
		cy.get("#inputTodoItem").type("item1");
		cy.get("#todoListBox").should("not.exist");
		cy.get("#addButton").click();
		cy.get("#todoListBox").should("exist");
	});

  it("should remove todo item from list", () => {
		cy.get("#inputTodoItem").type("item1");
		cy.get("#todoListBox").should("not.exist");
		cy.get("#addButton").click();
		cy.get("#todoListBox").should("exist");
    cy.get("#0").click()
		cy.get("#todoListBox").should("not.exist");
  });
});

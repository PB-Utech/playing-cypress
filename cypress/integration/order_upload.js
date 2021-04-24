describe("Order Upload", function () {
  it("can be uploaded when all fields are filled", function () {
    cy.visit("http://localhost:8080/#/MyOrder/OrderUpload");
    cy.get(
      "div.card-body > div.row:nth-child(1) > div:nth-child(1) > div > div "
    ).click();
    cy.get(
      ".el-select-dropdown:nth-child(4) > .el-scrollbar > .el-select-dropdown__wrap > ul.el-scrollbar__view > li:nth-child(1)"
    ).click();

    cy.get(":nth-child(1) > .form-group > .form-control").type("TEST_ADMIN");

    cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
      "0900000000"
    );

    cy.get(":nth-child(3) > .form-group > .form-control").type(
      "test@admin.com"
    );

    // Warehouse selection
    cy.get(
      ":nth-child(9) > :nth-child(1) > .form-check > .form-check-label"
    ).click();
    cy.get(
      ":nth-child(9) > :nth-child(2) > .form-group > .el-select > .el-input > .el-input__inner"
    ).click();
    cy.get("body > div.el-popper:last-child").find("li:first").click();

    // Transportation selection
    cy.get(
      ":nth-child(10) > :nth-child(1) > .form-check > .form-check-label"
    ).click();
    cy.get(
      ":nth-child(10) > :nth-child(2) > .form-group > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret"
    ).click();
    cy.get("body > div.el-popper:last-child").find("li:nth-child(2)").click();

    //select file excel template for uploading
    cy.get("#idFile").attachFile("testfileGLforCypress.csv");

    //click upload button
    cy.get("div.card-footer button:first").click();

    // Preview excel file Assertion
    cy.get("tbody:first > tr:first > td.el-table_1_column_2 > .cell").should(
      "have.text",
      "GL"
    );
  });
  it("should validate phone no value. length must be 9 and 10", function () {
    cy.visit("http://localhost:8080/#/MyOrder/OrderUpload");
    cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
      "1234567"
    );
    cy.get(":nth-child(2) > :nth-child(2)").should("have.class", "has-error");

    cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
      "8"
    );
    cy.get(":nth-child(2) > :nth-child(2)").should("have.class", "has-error");

    cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
      "9"
    );
    cy.get(":nth-child(2) > :nth-child(2)").should("have.class", "has-success");

    cy.get(":nth-child(2) > :nth-child(2) > .form-group > .form-control").type(
      "0"
    );
    cy.get(":nth-child(2) > :nth-child(2)").should("have.class", "has-success");
  });
});

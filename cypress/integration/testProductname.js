describe("test", function () {
  const url = "https://dev.leelaella.com/";

  it("TXR-529	Users can choose the color according to the product. (blue, pink,..)", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get("[data-cy=product-color-blue]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.get(".rounded-sm").should("include.text", "Blue");
    cy.get("[data-cy=cart-panel]").click();
    cy.get("[data-cy=product-color-green]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.get(":nth-child(2) > .flex.p-4 > .pl-4 > .rounded-sm").should(
      "include.text",
      "Green"
    );
  });

  // it("TXR-507 User can add product to cart", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get("[data-cy=product-name-CATware]").click();
  //   cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
  //   cy.get(".text-gray-700 > .border").should("contain", "1");
  //   //try to add more same product to cart by clicking + and check
  //   cy.get(".border-r").click();
  //   cy.get(".text-gray-700 > .border").should("contain", "2");
  // });
  // it("TXR-511	After user add items to the cart user can remove items from cart", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get("[data-cy=product-name-LANNA]").click();
  //   cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
  //   cy.wait(5000);
  //   cy.get(".border-l").click();
  //   cy.get(".bg-red-300").should("be.visible");
  //   cy.get(".bg-red-300").click();
  //   cy.get(".text-gray-300").should("contain", "Products not found.");
  // });
  // it("TXR-510	After user add items to the cart user can add another item to the cart", function () {
  //   cy.visit(url);
  //   cy.clearCookie;
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get("[data-cy=product-name-CATware]").click();
  //   cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
  //   cy.wait(5000);
  //   cy.get(".text-gray-700 > .border").should("have.text", "1");

  //   cy.get("[data-cy=cart-panel]").click({ force: true });
  //   cy.wait(2000);
  //   cy.get("#Go-back").click();
  //   cy.get("[data-cy=product-name-LANNA]").click();
  //   cy.wait(2000);
  //   cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
  //   cy.wait(5000);
  //   cy.get(
  //     ":nth-child(2) > .flex.p-4 > .pl-4 > .h-full > :nth-child(1) > .justify-start > .text-gray-700 > .border"
  //   ).should("have.text", "1");
  // });
  //   it("TXR-549	User can click on each product previews to see full product image", function () {
  //     cy.visit(url);
  //     cy.get(".flex-row > :nth-child(5)").click();
  //     cy.get("[data-cy=product-name-CATware]").click();

  //     cy.get(".w-full div:nth-child(2) div:nth-child(2) .w-28 img").eq(1).click();
  //     cy.get(".hidden div:nth-child(2) div:nth-child(5) img").should(
  //       "have.attr",
  //       "src",
  //       "https://saleor.dev.leelaella.com/media/products/GettyImages-1067347086-b5b784cc95e040e39507bf7114e58b15.jpg"
  //     );
  //     cy.get(".w-full div:nth-child(2) div:nth-child(2) .w-28 img").eq(0).click();
  //     cy.get(".hidden div:nth-child(2) div:nth-child(4) img").should(
  //       "have.attr",
  //       "src",
  //       "https://saleor.dev.leelaella.com/media/products/file-20200803-24-50u91u.jpg"
  //     );

  //   });
});

// it("TXR-547 User can see product details correctly", function () {
//   const url = "https://dev.leelaella.com/";
//   const saleor_dev_url = "https://dashboard.dev.leelaella.com";
//   cy.visit(url);
//   //Get product details
//   cy.get(".flex-row > :nth-child(5)").click();
//   cy.get("[data-cy=product-name-CATware]").click();
//   //-------check product name
//   //const product_name = cy.get("[data-cy=product-name]").text();

//   cy.get("[data-cy=product-name]").then(($product_name) => {
//     const text = $product_name.text();
//     //access to saleor web
//     cy.visit(saleor_dev_url);

//     //--- When we have to log in on Saleor
//     //   cy.get("[data-test=email]").type("admin@example.com");
//     //   cy.get("[data-test=password]").type("admin");
//     //   cy.get("[data-test=submit]").click();

//     cy.get(".MuiPaper-root div:nth-child(3) div:nth-child(2) span ").click({
//       force: true,
//     });
//     cy.get('[href="/dashboard/products?"] > .MuiTypography-root').click();
//     cy.wait(5000);
//     cy.get(".MuiTable-root tbody tr:nth-child(1) ").click();

//     cy.wait(5000);
//     cy.get("form .MuiTypography-root.MuiTypography-h5")
//       .eq(0)
//       //.wrap()

//       .then(($value) => {
//         let valueRead = $value.text().toUpperCase();
//         expect(valueRead).to.eq($product_name.text());
//       });

//     //cy.get("").should("have.text", text);
//   });

//   //---------check product description
//   cy.visit(url);
//   cy.get(".flex-row > :nth-child(5)").click();
//   cy.get("[data-cy=product-name-CATware]").click();
//   cy.wait(4000);

//   cy.get("p").then(($product_desc) => {
//     const textDesc = $product_desc.text();
//     //access to saleor web
//     cy.visit(saleor_dev_url);

//     //--- When we have to log in on Saleor
//     //cy.get("[data-test=email]").type("admin@example.com");
//     //cy.get("[data-test=password]").type("admin");
//     //cy.get("[data-test=submit]").click();

//     cy.get(".MuiPaper-root div:nth-child(3) div:nth-child(2) span ").click({
//       force: true,
//     });
//     cy.get('[href="/dashboard/products?"] > .MuiTypography-root').click();
//     cy.wait(5000);
//     cy.get(".MuiTable-root tbody tr:nth-child(1) ").click();

//     cy.wait(5000);
//     cy.get(
//       '.public-DraftStyleDefault-block > [data-offset-key="95e1a-0-0"] > span'
//     ).then(($value_desc) => {
//       expect(textDesc).to.eq($value_desc.text());
//     });
//   });

//   //------CHECK PRODUCT PRICE
// });
//});

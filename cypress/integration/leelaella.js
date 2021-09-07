describe("automated testing leelaella", function () {
  const url = "https://dev.leelaella.com/";
  const saleor_dev_url = "https://dashboard.dev.leelaella.com";
  const saleor_staging_url = "https://dashboard.staging.leelaella.com";

  it("TXR-545 Video on landing page play automatically", function () {
    //const url = "https://dev.leelaella.com/";
    const subscribe_window_chrome = "pbtest@window.chrome";
    const subscribe_MAC_Safari = "pbtest@mac.safari";
    const subscribe_window_firefox = "pbtest@window.firefox";
    cy.visit(url);

    //TXR-545 Video on landing page play automatically
    //cy.get("#home-video").debug();
    //cy.wait(200);
    //cy.get("#home-video").should(($video) => {
    //  expect($video.get(0)).to.have.property("paused", false);
    // });
    //cy.pause();

    //TXR-548	User can see product color and size for each color correctly
    //cy.get('[data-cy=product-color-blue]').should
  });

  it("Check social media link visible", function () {
    //IGG
    // cy.visit(url);
    // cy.get(".flex-row > :nth-child(1) > img").should("be.visible");
    // cy.get(":nth-child(1) > .shadow").click();
    // cy.url().should(
    //   "eq",
    //   "https://www.instagram.com/leelaandella/?utm_medium=copy_link"
    // );

    //LINE
    cy.visit(url);
    cy.get(".absolute > .flex-row > :nth-child(2) > img").should("be.visible");
    cy.get(".absolute > .flex-row > :nth-child(2) > img").click();
    cy.url().should("eq", "https://line.me/R/ti/p/@leelaandella");

    //Facebook
    cy.visit(url);
    cy.get(".absolute > .flex-row > :nth-child(3) > img").should("be.visible");
    cy.get(".absolute > .flex-row > :nth-child(3) > img").click();
    cy.url().should("eq", "https://www.facebook.com/LeelaAndElla/");
  });

  //User can go to any page from the footer
  it("TXR-551 check about us", function () {
    cy.visit(url);
    cy.get("[data-cy=aboutus-footer] > a").contains("About Us").click();
    cy.get("[data-cy=aboutus-header]").contains("ABOUT US");
    cy.get("[data-cy=aboutus-header]").should("contain", "ABOUT US");
  });

  it("TXR-553 check Terms & Conditions ", function () {
    cy.visit(url);
    cy.get("[data-cy=terms-conditions-footer] > a")
      .contains("Terms & Conditions")
      .click();
    cy.get("[data-cy=tc-header]").contains("TERMS & CONDITIONS");
    cy.get("[data-cy=tc-header]").should("contain", "TERMS & CONDITIONS");
  });

  it("TXR-550 check contact us", function () {
    cy.visit(url);
    cy.get("[data-cy=contactus-footer] > a").contains("Contact Us").click();
    cy.get(".text-2xl").contains("CONTACT US");
    cy.get("[data-cy=contactus-header]").contains("CONTACT US");
    cy.get("[data-cy=contactus-header]").should("contain", "CONTACT US");
  });

  it("TXR-554 check Shipping & Return", function () {
    cy.visit(url);
    cy.get("[data-cy=shipping-footer] > a")
      .contains("Shipping & Return")
      .click();
    cy.get(".text-2xl").contains("SHIPPING & RETURN");
    cy.get("[data-cy=shipping-header]").contains("SHIPPING & RETURN");
    cy.get("[data-cy=shipping-header]").should("contain", "SHIPPING & RETURN");
  });

  it("TXR-555 check privacy policy", function () {
    cy.visit(url);
    cy.get("[data-cy=privacy-footer] > a").contains("Privacy Policy").click();
    cy.get(".text-2xl").contains("PRIVACY POLICY");
    cy.get("[data-cy=privacy-header]").contains("PRIVACY POLICY");
    cy.get("[data-cy=privacy-header]").should("contain.text", "PRIVACY POLICY");
  });

  //User can click tab bar for each page of CUSTOMER CARE
  it("CROSSCHECK User can click tab bar for each page of CUSTOMER CARE", function () {
    cy.visit(url);
    cy.get("[data-cy=contactus-footer] > a").contains("Contact Us").click();
    cy.get("[data-cy=shipping-menu]").contains("SHIPPING & RETURN").click();
    cy.get("[data-cy=shipping-header]").contains("SHIPPING & RETURN");
    cy.get("[data-cy=shipping-header]").should("contain", "SHIPPING & RETURN");

    cy.get("[data-cy=privacy-menu]").contains("PRIVACY POLICY").click();
    cy.get("[data-cy=privacy-header]").contains("PRIVACY POLICY");
    cy.get("[data-cy=privacy-header]").should("contain", "PRIVACY POLICY");

    cy.get("[data-cy=contactus-menu]").contains("CONTACT US").click();
    cy.get("[data-cy=contactus-header]").contains("CONTACT US");
    cy.get("[data-cy=contactus-header]").should("contain", "CONTACT US");
  });

  //   it("TXR-552 User can subscription from footer", function(){
  //cy.visit(url);
  //     cy.get("#email-input-box").type(subscribe_window_chrome);
  //     cy.get("#email-subscribe-button").click();
  //   })

  it("TXR-528 User can change currencies type from nav bar (BAHT,USD)", function () {
    cy.visit(url);
    //cy.get("[data-cy=burger-menu] > svg").click();
    cy.get("[data-cy=country-selecter]").select("USD");
    // cy.get("[data-cy=location-m] > [data-cy=country-selecter]").select("USD");
    //cy.get("ol.w-full > .flex > .w-4 > .fill-current").click();
    cy.get("[data-cy=homepage-icon] > .fill-current > path").click({
      force: true,
    });
    cy.get(":nth-child(3) > .flex-row > :nth-child(2)").click();
    cy.get(
      ":nth-child(1) > .flex-col > .justify-between > :nth-child(1) > :nth-child(1)"
    ).contains("USD");
    //cy.get("[data-cy=burger-menu] > svg").click();
    //cy.get("[data-cy=location-m] > [data-cy=country-selecter]").select("THB");
    //cy.get("ol.w-full > .flex > .w-4 > .fill-current").click();
    cy.get("[data-cy=country-selecter]").select("THB");
    cy.get(":nth-child(1) > .flex-col > .justify-between > span").should(
      "contain",
      "THB"
    );
    cy.get(":nth-child(1) > .flex-col > .justify-between > span").contains(
      "THB"
    );
  });

  it("user can zoom in the product image", function () {
    //remain checking scrool while zooming
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get(":nth-child(1) > [data-cy=product-full-image]").click({
      force: true,
    });
    cy.get("#img-zoom").click();
    cy.get("#img-zoom").click();
    cy.get("#img-zoom > .right-0 > .fill-current > path").click();
  });

  it("TXR-547 User can see product details correctly", function () {
    //const url = "https://dev.leelaella.com/";
    //const saleor_dev_url = "https://dashboard.dev.leelaella.com";
    cy.visit(url);
    //Get product details
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    //-------check product name
    //const product_name = cy.get("[data-cy=product-name]").text();

    cy.get("[data-cy=product-name]").then(($product_name) => {
      const text = $product_name.text();
      //access to saleor web
      cy.visit(saleor_dev_url);

      //--- When we have to log in on Saleor
      // cy.get("[data-test=email]").type("admin@example.com");
      // cy.get("[data-test=password]").type("admin");
      // cy.get("[data-test=submit]").click();

      cy.get(".MuiPaper-root div:nth-child(3) div:nth-child(2) span ").click({
        force: true,
      });
      cy.get('[href="/dashboard/products?"] > .MuiTypography-root').click();
      cy.wait(5000);
      cy.get(".MuiTable-root tbody tr:nth-child(1) ").click();

      cy.wait(5000);
      cy.get("form .MuiTypography-root.MuiTypography-h5")
        .eq(0)
        //.wrap()

        .then(($value) => {
          let valueRead = $value.text().toUpperCase();
          expect(valueRead).to.eq($product_name.text());
        });

      //cy.get("").should("have.text", text);
    });

    //---------check product description
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.wait(4000);

    cy.get("p").then(($product_desc) => {
      const textDesc = $product_desc.text();
      //access to saleor web
      cy.visit(saleor_dev_url);

      //--- When we have to log in on Saleor
      // cy.get("[data-test=email]").type("admin@example.com");
      // cy.get("[data-test=password]").type("admin");
      // cy.get("[data-test=submit]").click();

      cy.get(".MuiPaper-root div:nth-child(3) div:nth-child(2) span ").click({
        force: true,
      });
      cy.get('[href="/dashboard/products?"] > .MuiTypography-root').click();
      cy.wait(5000);
      cy.get(".MuiTable-root tbody tr:nth-child(1) ").click();

      cy.wait(5000);
      cy.get(
        '.public-DraftStyleDefault-block > [data-offset-key="95e1a-0-0"] > span'
      ).then(($value_desc) => {
        expect(textDesc).to.eq($value_desc.text());
      });
    });

    //------CHECK PRODUCT PRICE
  });

  it("TXR-507 User can add product to cart", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.get(".text-gray-700 > .border").should("contain", "1");
    //try to add more same product to cart by clicking + and check
    cy.get(".border-r").click();
    cy.get(".text-gray-700 > .border").should("contain", "2");
  });

  it("TXR-549	User can click on each product previews to see full product image", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();

    cy.get(".w-full div:nth-child(2) div:nth-child(2) .w-28 img").eq(1).click();
    cy.get(".hidden div:nth-child(2) div:nth-child(5) img").should(
      "have.attr",
      "src",
      "https://saleor.dev.leelaella.com/media/products/GettyImages-1067347086-b5b784cc95e040e39507bf7114e58b15.jpg"
    );
    cy.get(".w-full div:nth-child(2) div:nth-child(2) .w-28 img").eq(0).click();
    cy.get(".hidden div:nth-child(2) div:nth-child(4) img").should(
      "have.attr",
      "src",
      "https://saleor.dev.leelaella.com/media/products/file-20200803-24-50u91u.jpg"
    );
  });

  it("TXR-731	User can go to previous page by 'Go Back' button", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get("#Go-back").click();
    cy.url().should(
      "contain",
      "https://dev.leelaella.com/product-list/?&category=Q2F0ZWdvcnk6OA=="
    );
  });

  it("	TXR-509	User can't confirm items in the cart when item out of stock", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-LANNA]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.wait(5000);
    cy.get(".mt-0 > div.w-full > .w-full")
      .should("contain", "CHECKOUT")
      .should("be.disabled");
    cy.get(".border-gray-200").should("contain", "+").should("be.disabled");
  });

  it("TXR-511	After user add items to the cart user can remove items from cart", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-LANNA]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.wait(5000);
    cy.get(".border-l").click();
    cy.get(".bg-red-300").should("be.visible");
    cy.get(".bg-red-300").click();
    cy.get(".text-gray-300").should("contain", "Products not found.");
  });

  it("TXR-510	After user add items to the cart user can add another item to the cart", function () {
    cy.visit(url);
    cy.clearCookie;
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.wait(5000);
    cy.get(".text-gray-700 > .border").should("have.text", "1");

    cy.get("[data-cy=cart-panel]").click({ force: true });
    cy.wait(2000);
    cy.get("#Go-back").click();
    cy.get("[data-cy=product-name-LANNA]").click();
    cy.wait(2000);
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.wait(5000);
    cy.get(
      ":nth-child(2) > .flex.p-4 > .pl-4 > .h-full > :nth-child(1) > .justify-start > .text-gray-700 > .border"
    ).should("have.text", "1");
  });

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
});

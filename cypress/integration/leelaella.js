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

    cy.get(
      ".w-full.flex-col > :nth-child(3) > .flex-row > :nth-child(2)"
    ).click();

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

      cy.get(".MuiTable-root tbody tr:nth-child(2) ").click();

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
      cy.get(".MuiTable-root tbody tr:nth-child(2) ").click();

      cy.wait(5000);
      cy.get(
        '.public-DraftStyleDefault-block > [data-offset-key="95e1a-0-0"] > span'
      ).then(($value_desc) => {
        expect(textDesc).to.eq($value_desc.text());
      });
    });

    //------CHECK PRODUCT PRICE
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.wait(4000);

    //select color and size
    cy.get("[data-cy=product-color-green]").click();
    cy.get("[data-cy=product-size4-button]").click();

    cy.get("[data-cy=product-price]")
      .invoke("text")
      .then(($product_price) => {
        let res = $product_price.replace(/,/g, "");
        let res2 = res.replace(/ /g, "");
        let res3 = res2.replace(/THB/g, "");

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
        cy.get(".MuiTable-root tbody tr:nth-child(2) ").click();

        cy.wait(5000);

        //select each item to check each price
        cy.get(":nth-child(4) > [data-test=name]").click();
        cy.get(".jss600 > .MuiTypography-root").should("contain", "Green");
        cy.get(".jss600 > .MuiTypography-root").should("contain", "4");

        //get price
        cy.get(
          ".jss1157 > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
        ).should("have.value", res3);
      });
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

  it("TXR-548	User can see product color and size for each color correctly", function () {
    const url = "https://dev.leelaella.com/";
    const saleor_dev_url = "https://dashboard.dev.leelaella.com";
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.wait(4000);

    //select color and size
    cy.get("[data-cy=product-color-green]").click();
    cy.get("[data-cy=product-size4-button]").click();

    cy.get("[data-cy=product-full-image]")
      .eq(1)
      .invoke("attr", "src")
      .then(($src) => {
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
        cy.get(".MuiTable-root tbody tr:nth-child(2) ").click();

        // cy.wait(5000);
        cy.get(" [data-test=product-image]:nth-child(2) img").should(
          "have.attr",
          "src",
          $src
        );
      });
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

  it("TXR-508	User can see product color and size for each color correctly", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get(".mb-8 > .bg-crail-200").should("contain", "ADD TO CART").click();
    cy.get(".text-gray-700 > .border").should("contain", "1");
    cy.get(".rounded-sm").should("contain", "Blue");
    cy.get(".rounded-sm").should("contain", "4.5");
    cy.get(".rounded-sm").click();
    cy.get(".flex.p-4 > .z-20 > :nth-child(1)").should("contain", "Blue");
    cy.get(".mt-5 > .ring-turkish-rose-600").should("contain", "4.5");
    cy.get(
      '.my-1 > [style="background: linear-gradient(90deg, green 50%, green 50%);"]'
    ).click();
    cy.get(".flex.p-4 > .z-20 > :nth-child(1)").should("contain", "Green");
    cy.get(".ring-crail-200").contains("4").click();
    cy.get(".ring-crail-200").should("contain", "4");
    cy.get(".z-20 > .bg-crail-200").contains("CONFIRM").click();
    cy.get(".rounded-sm").should("contain", "Green");
    cy.get(".rounded-sm").should("contain", "4");
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

  it("TXR-525	When user click JEWELRY category on homepage it will redirect user to product list with JEWERLY category filter applied", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(7)").click();
    cy.get(".flex-row-reverse > :nth-child(2)").should("contain", "RING");
    cy.get(".flex-row-reverse > :nth-child(3)").should("contain", "NECKLACE");
    cy.get(".flex-row-reverse > :nth-child(4)").should("contain", "BRACELET");
    cy.get(".flex-row-reverse > :nth-child(5)").should("contain", "EARRINGS");

    //check visible
    cy.get(".flex-row-reverse > :nth-child(2)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(3)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(4)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(5)").should("be.visible");
  });

  it("TXR-524	When user click EXTRA category on homepage it will redirect user to product list with EXTRA category filter applied", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(6)").click();
    cy.get(".flex-row-reverse > :nth-child(2)").should("contain", "COVER UP");
    cy.get(".flex-row-reverse > :nth-child(3)").should("contain", "BLAZER");
    cy.get(".flex-row-reverse > :nth-child(4)").should("contain", "PANTS");
    cy.get(".flex-row-reverse > :nth-child(5)").should("contain", "SKIRT");
    cy.get(".flex-row-reverse > :nth-child(6)").should("contain", "DRESS");

    //check visible
    cy.get(".flex-row-reverse > :nth-child(2)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(3)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(4)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(5)").should("be.visible");
    cy.get(".flex-row-reverse > :nth-child(6)").should("be.visible");
  });

  it("TXR-523	When user click LINGERIE category on homepage it will redirect user to product list with EXTRA category filter applied", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".text-c").should("contain", "LINGERIE");

    //check visible
    cy.get(".text-c").should("be.visible");
  });

  it("TXR-522	When user click ONEPIECES category on homepage it will redirect user to product list with EXTRA category filter applied", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(4)").click();
    cy.get(".flex-row-reverse > :nth-child(2)").should("contain", "ONEPIECE");

    //check visible
    cy.get(".flex-row-reverse > :nth-child(2)").should("be.visible");
  });

  it("TXR-521	When user click BIKINI BOTTOM category on homepage it will redirect user to product list with EXTRA category filter applied", function () {
    cy.visit(url);
    cy.get(
      ".w-full.flex-col > :nth-child(3) > .flex-row > :nth-child(3)"
    ).click();
    cy.get(".flex-row-reverse > :nth-child(2)").should("contain", "BOTTOM");

    //check visible
    cy.get(".flex-row-reverse > :nth-child(2)").should("be.visible");
  });

  it("TXR-520	When user click BIKINI TOP category on homepage it will redirect user to product list with EXTRA category filter applied", function () {
    cy.visit(url);
    cy.get(
      ".w-full.flex-col > :nth-child(3) > .flex-row > :nth-child(2)"
    ).click();
    cy.get(".flex-row-reverse > :nth-child(2)").should("contain", "TOP");

    //check visible
    cy.get(".flex-row-reverse > :nth-child(2)").should("be.visible");
  });

  it("TXR-602	User can view size guide for ONEPIECE category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(3) > span").contains("OnePiece").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-Freesia]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  // +++++++++ Due to not found earring in dev environment
  // it("TXR-614	User can view size guide for EARRING category", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get(".bg-gray-100 > .whitespace-nowrap").click();
  //   cy.get(".h-3 > .fill-current > path").click({ force: true });
  //   cy.get(".absolute > :nth-child(9) > span").contains("Earrings").click();
  //   cy.get(".absolute > .p-2").contains("APPLY").click();
  //   //----------cy.get("[data-cy=product-name-Freesia]").click();
  //   cy.get(".mx-1").click();
  //   cy.get(".flex  .h-min").should("be.visible");
  // });

  it("TXR-613	User can view size guide for BIKINI TOP category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(10) > span").contains("Dress").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-asdasd]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  it("TXR-612	User can view size guide for SKIRT category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(11) > span").contains("skirt").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-Iossafari]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  // +++++++++ Due to not found COVER Up in dev environment
  // it("TXR-609	User can view size guide for COVER UP category", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get(".bg-gray-100 > .whitespace-nowrap").click();
  //   cy.get(".h-3 > .fill-current > path").click({ force: true });
  //   cy.get(".absolute > :nth-child(7) > span").contains("Cover Up").click();
  //   cy.get(".absolute > .p-2").contains("APPLY").click();
  //   //------ cy.get("[data-cy=product-name-Iossafari]").click();
  //   cy.get(".mx-1").click();
  //   cy.get(".flex  .h-min").should("be.visible");
  // });

  it("TXR-611	User can view size guide for PANTS category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(12) > span").contains("Pants").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-harry]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  // +++++++++ Due to not found NECKLACE in dev environment
  // it("TXR-608	User can view size guide for NECKLACE category", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get(".bg-gray-100 > .whitespace-nowrap").click();
  //   cy.get(".h-3 > .fill-current > path").click({ force: true });
  //   cy.get(".absolute > :nth-child(6) > span").contains("Necklace").click();
  //   cy.get(".absolute > .p-2").contains("APPLY").click();
  //   //------ cy.get("[data-cy=product-name-Iossafari]").click();
  //   cy.get(".mx-1").click();
  //   cy.get(".flex  .h-min").should("be.visible");
  // });

  it("TXR-610	User can view size guide for BLAZER category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(13) > span").contains("blazer").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-Test01]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  it("TXR-606	User can view size guide for RING category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(4) > span").contains("Ring").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();

    cy.get(
      "body > div > div:nth-child(3)  >div:nth-child(2) >div:nth-child(2) >div:nth-child(2) img"
    ).click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  it("TXR-604	User can view size guide for BIKINI BOTTOM category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(2) > span").contains("Bottom").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-Suzanne]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  // +++++++++ Due to not found BRACELET  in dev environment
  // it("TXR-607	User can view size guide for BRACELET category", function () {
  //   cy.visit(url);
  //   cy.get(".flex-row > :nth-child(5)").click();
  //   cy.get(".bg-gray-100 > .whitespace-nowrap").click();
  //   cy.get(".h-3 > .fill-current > path").click({ force: true });
  //   cy.get(".absolute > :nth-child(5) > span").contains("Bracelet").click();
  //   cy.get(".absolute > .p-2").contains("APPLY").click();
  //   //------ cy.get("[data-cy=product-name-Iossafari]").click();
  //   cy.get(".mx-1").click();
  //   cy.get(".flex  .h-min").should("be.visible");
  // });

  it("TXR-605	User can view size guide for LINGERIE category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(8) > span").contains("lingerie").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-CATware]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });

  it("TXR-603	User can view size guide for BIKINI TOP category", function () {
    cy.visit(url);
    cy.get(".flex-row > :nth-child(5)").click();
    cy.get(".bg-gray-100 > .whitespace-nowrap").click();
    cy.get(".h-3 > .fill-current > path").click({ force: true });
    cy.get(".absolute > :nth-child(1) > span").contains("Top").click();
    cy.get(".absolute > .p-2").contains("APPLY").click();
    cy.get("[data-cy=product-name-Doll]").click();
    cy.get(".mx-1").click();
    cy.get(".flex  .h-min").should("be.visible");
  });
});

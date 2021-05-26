describe("PB Robot do my put away work", function () {
  it("should fill put away form for me", function () {
    const location = "W1999999";
    const url = "https://203.150.13.78:8443/glop/#/ScanQRCode/PutAway";

    // const location = "W1000000";
    // const url = "http://localhost:8080/#/ScanQRCode/PutAway";
    //////////////////////////////////////////
    cy.visit(url);

    cy.fixture("putaway.csv").then(function (fc) {
      const put_away = CSVToArray(fc, ",");
      let i = -1;
      for (const data of put_away) {
        i++;
        if (i == 0) {
          continue;
        }
        if (1 == data.length) {
          continue;
        }
        // if (i == 2) {
        //   break;
        // }
        const order_no = data[0];
        const product_no = data[1];
        const revise_unit_desc = data[2];
        const revise_qty = data[3];
        const lot_no = data[4];
        const serial_no = data[5];
        const status = data[9];
        //const status = "พร้อมใช้";
        console.log(status);
        let qr_product = `${order_no};${product_no};${lot_no};${serial_no}{enter}`;
        console.log(data);
        console.log(qr_product);

        cy.wait(100);
        // Location
        cy.get(
          ".content .card-body .row > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input"
        ).type(location + "{enter}");
        cy.root().find("button.swal-button--confirm").click();

        // QR product
        cy.get(
          ".content .card-body .row > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input"
        ).type(qr_product + "{enter}");

        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("be.visible");
        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("have.text", "OK");
        cy.root().find(".swal-icon").should("be.visible");
        cy.wait(800); // wait for animation
        cy.root().find(".swal-footer .swal-button--confirm").click();

        // QTY
        cy.get(
          ".content .card-body .row > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) input"
        ).type(revise_qty);

        // UNIT
        cy.get(
          ".content .card-body .row > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) input"
        ).click();
        cy.get(".el-scrollbar > .el-select-dropdown__wrap li")
          .contains(revise_unit_desc)
          .click();

        // STATUS
        cy.get(
          ".card-body > .row > div:nth-child(2) > div:nth-child(5) .el-select"
        ).click();
        cy.get(".el-scrollbar > .el-select-dropdown__wrap li")
          .contains(status)
          .click();

        //   SAVE
        cy.root().find(".card-footer .btn-success").click();
        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("be.visible");
        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("have.text", "OK");
        cy.root().find(".swal-footer .swal-button--confirm").click();
        // cy.wait(1000); // use this to pause on last confirmation box
        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("be.visible");
        cy.root()
          .find(".swal-footer .swal-button--confirm")
          .should("have.text", "OK");
        cy.root().find(".swal-footer .swal-button--confirm").click();
      }
      //   console.log(put_away);
    });
  });
});

function CSVToArray(strData, strDelimiter) {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ",";

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
    "gi"
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    } else {
      // We found a non-quoted value.
      var strMatchedValue = arrMatches[3];
    }
    if (typeof strMatchedValue === "undefined") {
      strMatchedValue = "";
    }
    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
}

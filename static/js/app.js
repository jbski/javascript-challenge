// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// Select the HTML tag to insert the table rows
let tbody = d3.select("tbody");

// Loop through each data record and append a new row to the table
tableData.forEach((sighting => {
    let newRow = tbody.append("tr");

    // Within each new row insert the data values
    Object.entries(sighting).forEach(([key, value]) => {
        let field = newRow.append("td");
        field.text(value);
    });
}));

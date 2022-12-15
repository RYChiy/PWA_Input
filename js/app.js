// This function gets the values from the form inputs and displays them as a table
function displayTable() {
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
  
    // Calculate the total balance by adding the new amount to the existing balance (assuming the initial balance is 0)
    var balance = 0 + parseInt(amount);
  
    // Create the HTML for the table
    var tableHtml = "<table><tr><th>Name</th><th>Description</th><th>Date</th><th>Amount (in EUR)</th><th>Total Balance (in EUR)</th></tr>";
    tableHtml += "<tr><td>" + name + "</td><td>" + description + "</td><td>" + date + "</td><td>" + amount + "</td><td>" + balance + "</td></tr>";
    tableHtml += "</table>";
  
    // Display the table
    document.getElementById("table").innerHTML = tableHtml;
  }
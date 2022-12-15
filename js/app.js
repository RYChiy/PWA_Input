// This function gets the values from the form inputs and displays them as a table
function displayTable() {
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
  
    // Calculate the total balance by adding the new amount to the existing balance (assuming the initial balance is 0)
    var balance = 0 + parseInt(amount);
  
    // Create the HTML for a new table row with the user's input
    var tableRowHtml = "<tr><td>" + name + "</td><td>" + description + "</td><td>" + date + "</td><td>" + amount + "</td><td>" + balance + "</td></tr>";
  
    // Get the existing table from the page
    var tableElement = document.getElementById("myTable");
    if (!tableElement) {
      // If the table doesn't exist, create it
      tableElement = document.createElement("table");
      tableElement.id = "myTable";
      tableElement.innerHTML = "<tr><th>Name</th><th>Description</th><th>Date</th><th>Amount (in EUR)</th><th>Total Balance (in EUR)</th></tr>";
      document.getElementById("table").appendChild(tableElement);
    }
  
    saveData();
    // Add the new table row to the existing table
    tableElement.innerHTML += tableRowHtml;
  }

  // This function gets the values from the form inputs and saves them in localStorage
function saveData() {
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
     
    
  
    // Calculate the total balance by adding the new amount to the existing balance (assuming the initial balance is 0)
    var balance =  localStorage.getItem("balance")+parseInt(amount);
    console.log(parseInt(balance));
    // Save the user's input in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("date", date);
    localStorage.setItem("amount", amount);
    localStorage.setItem("balance", balance);
  }
  
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then((res) => console.log("service worker registered"))
        .catch((err) => console.log("service worker not registered", err));
    });
  }
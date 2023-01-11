// This function gets the values from the form inputs and displays them as a table
const userinput =[];

userinput.push(localStorage.getItem("userinput"))
function displayTable() {
    // Get the values from the form inputs
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
  
    // Calculate the total balance by adding the new amount to the existing balance (assuming the initial balance is 0)
    userinput.push[{category:category,
      description:description,
      date:date,
      amount:amount,
      balance: localStorage.getItem("balance")
    }]
    var balance = Number(localStorage.getItem("balance")) +parseInt(amount);
  
    userinput.forEach(function (input) {
     
      var tableRowHtml = "<tr><td>" + input.category + "</td><td>" + input.description + "</td><td>" + input.date + "</td><td>" + input.amount + "</td><td>" + input.balance + "</td></tr>";
      var tableElement = document.getElementById("myTable");

      tableElement.innerHTML += tableRowHtml;

  });
    // Create the HTML for a new table row with the user's input
    var tableRowHtml = "<tr><td>" + category + "</td><td>" + description + "</td><td>" + date + "</td><td>" + amount + "</td><td>" + balance + "</td></tr>";
  
    // Get the existing table from the page
    var tableElement = document.getElementById("myTable");
    if (!tableElement) {
      // If the table doesn't exist, create it
      tableElement = document.createElement("table");
      tableElement.id = "myTable";
      tableElement.innerHTML = "<tr><th>Category</th><th>Description</th><th>Date</th><th>Amount (in EUR)</th><th>Total Balance (in EUR)</th></tr>";
      document.getElementById("table").appendChild(tableElement);
    }
  
    saveData();
    // Add the new table row to the existing table
    tableElement.innerHTML += tableRowHtml;
    localStorage.setItem("userinput", userinput)
  }

  // This function gets the values from the form inputs and saves them in localStorage
function saveData() {
    // Get the values from the form inputs
    var category = document.getElementById("category").value;
    var description = document.getElementById("description").value;
    var date = document.getElementById("date").value;
    var amount = document.getElementById("amount").value;
    
   
    
  
    // Calculate the total balance by adding the new amount to the existing balance (assuming the initial balance is 0)
    
    var balance = Number(localStorage.getItem("balance")) +parseInt(amount);
    console.log(balance);
    // Save the user's input in localStorage
    localStorage.setItem("category", category);
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
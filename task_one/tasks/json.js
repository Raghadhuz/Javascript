// Global variable to store the data and table state
let jsonData = [];
let tableVisible = false; // to know if the table is currently shown

// 1) When the page loads, fetch the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data; // save the data in the variable
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

// 2) Get the elements from HTML
const box = document.getElementById("box");
const tableContainer = document.getElementById("table-container");

// 3) Function to create the table from jsonData
function createTableFromJson() {
  // If no data, do nothing
  if (!jsonData || jsonData.length === 0) {
    tableContainer.innerHTML = "<p>No data available</p>";
    return;
  }

  // Clear old content
  tableContainer.innerHTML = "";

  // Create table element
  const table = document.createElement("table");

  // --------- Create table header (keys of the first object) ----------
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const firstObject = jsonData[0];
  const keys = Object.keys(firstObject); // ["firstName", "lastName", "age"]

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // --------- Create table body ----------
  const tbody = document.createElement("tbody");

  jsonData.forEach((obj) => {
    const row = document.createElement("tr");

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Add table to container
  tableContainer.appendChild(table);
}

// 4) Click event: show table
box.addEventListener("click", function () {
  if (!tableVisible) {
    createTableFromJson();
    tableVisible = true;
  }
});

// 5) Double-click event: hide table
box.addEventListener("dblclick", function () {
  tableContainer.innerHTML = ""; // remove the table
  tableVisible = false;
});

function validateName() {
  let name = document.getElementById("name");
  let regex = /^[A-Za-z]+$/;

  if (regex.test(name.value)) {
    name.className = "valid";
  } else {
    name.className = "invalid";
  }
}

function validateEmail() {
  let email = document.getElementById("email");
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    email.className = "valid";
  } else {
    email.className = "invalid";
  }
}

function validateMobile() {
  let mobile = document.getElementById("mobile");
  let regex = /^\d{10}$/;

  if (regex.test(mobile.value)) {
    mobile.className = "valid";
  } else {
    mobile.className = "invalid";
  }
}

let title = document.getElementById("titleBar");
let table = document.getElementById("dataTable");

// Single Click → Show Table
title.onclick = function () {
  table.style.display = "table";
};

// Double Click → Hide Table
title.ondblclick = function () {
  table.style.display = "none";
};

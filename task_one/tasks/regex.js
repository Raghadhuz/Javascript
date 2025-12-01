function validateForm() {
  try {
    // Inputs
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let bdate = document.getElementById("bdate").value;
    let email = document.getElementById("email").value.trim();
    let confirmEmail = document.getElementById("confirmEmail").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("errorMessage");

    error.innerText = "";

    // REGEX RULES
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const passwordRegex =
      /^(?=[A-Z])(?=(?:.*\d){2,})(?=.*[!@#$%^&*()_+\-=]).{8,32}$/;

    if (!nameRegex.test(fname)) {
      throw new Error("First name must contain letters only.");
    }

    if (!nameRegex.test(lname)) {
      throw new Error("Last name must contain letters only.");
    }

    if (!validateBirthDate(bdate)) {
      throw new Error(
        "Birth date is not valid (age must be between 10 and 100)."
      );
    }

    if (!emailRegex.test(email)) {
      throw new Error("Invalid email structure.");
    }

    if (email !== confirmEmail) {
      throw new Error("Emails do not match.");
    }

    if (!mobileRegex.test(mobile)) {
      throw new Error("Mobile number must be exactly 10 digits.");
    }

    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password requirements:\n" +
          "- Start with a capital letter\n" +
          "- At least 2 numbers\n" +
          "- At least 1 special character\n" +
          "- Length between 8 to 32 characters"
      );
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    alert("Registration Successful!");
    return true;
  } catch (err) {
    document.getElementById("errorMessage").innerText = err.message;
    return false;
  }
}

function validateBirthDate(date) {
  if (!date) return false;

  let birth = new Date(date);
  let today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  return age >= 10 && age <= 100;
}
function hoverEffect() {
  let box = document.getElementById("myBox");
  box.style.backgroundColor = "yellow";
  box.style.fontWeight = "bold";
}
function showFlag() {
  let country = document.getElementById("countrySelect").value;
  let flagBox = document.getElementById("flagBox");

  let flags = {
    jordan: "https://flagcdn.com/w320/jo.png",
    usa: "https://flagcdn.com/w320/us.png",
    uk: "https://flagcdn.com/w320/gb.png",
    saudi: "https://flagcdn.com/w320/sa.png",
    france: "https://flagcdn.com/w320/fr.png",
    germany: "https://flagcdn.com/w320/de.png",
  };

  if (country === "") {
    flagBox.innerHTML = "<p style='color:#777;'>No flag selected</p>";
    return;
  }

  let img = `<img src="${flags[country]}" alt="Country Flag">`;
  flagBox.innerHTML = img;
}
function checkPasswordLength() {
  let password = document.getElementById("password").value;
  let msg = document.getElementById("passMsg");

  if (password.length < 8) {
    msg.innerText = "Password is too short";
    msg.className = "msg error";
  } else {
    msg.innerText = "Good password length";
    msg.className = "msg success";
  }
}

function checkPasswordMatch() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let msg = document.getElementById("confirmMsg");

  if (confirmPassword.length === 0) {
    msg.innerText = "";
    return;
  }

  if (password !== confirmPassword) {
    msg.innerText = "Passwords do not match";
    msg.className = "msg error";
  } else {
    msg.innerText = "Passwords match";
    msg.className = "msg success";
  }
}

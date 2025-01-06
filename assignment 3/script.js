// JavaScript for client-side validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

  // Reset validation states
  form.classList.remove("was-validated");

  let isValid = true;

  // Email validation
  if (!email.value || !email.checkValidity()) {
      isValid = false;
      email.classList.add("is-invalid");
  } else {
      email.classList.remove("is-invalid");
  }
   // Password validation
   if (!password.value || password.value.length < 6) {
    isValid = false;
    password.classList.add("is-invalid");
} else {
    password.classList.remove("is-invalid");
}

// Confirm password validation
if (confirmPassword.value !== password.value) {
    isValid = false;
    confirmPassword.classList.add("is-invalid");
} else {
    confirmPassword.classList.remove("is-invalid");
}
 // If the form is valid, you can proceed
 if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
    form.classList.remove("was-validated");
} else {
    form.classList.add("was-validated");
}
}
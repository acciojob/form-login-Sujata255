function getFormValue() {
  // Get the first and last name elements
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");

  // Get the values   
 from the input fields
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Print the full name in an alert
  alert(firstName + " " + lastName);
}
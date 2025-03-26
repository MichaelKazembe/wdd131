// Initiate the variables
const input = document.querySelector("#favchap"); // Input field
const button = document.querySelector("button"); // Add button
const list = document.querySelector("#list"); // Unordered list

// Create a click event listener for the Add Chapter button
button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if input is not blank
  if (input.value.trim() !== "") {
    // Create new list item and delete button
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    // Populate the list item with the input value
    listItem.textContent = input.value;

    // Populate the delete button with an ❌
    deleteButton.textContent = "❌";

    // Add aria-label to the delete button for accessibility
    deleteButton.setAttribute("aria-label", "delete item");

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the unordered list
    list.appendChild(listItem);

    // Add an event listener to the delete button
    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem); // Remove the list item
      input.focus(); // Set focus back to the input field
    });

    // Clear the input field
    input.value = "";

    // Set focus to the input field for the next input
    input.focus();

    // Add style to the list item
    listItem.style.padding = "5px";
    listItem.style.marginleft = "5px";

    // Add style to the delete button
    deleteButton.style.margin = "10px";
    deleteButton.style.padding = "5px";
    deleteButton.style.width = "50px";
    deleteButton.style.height = "40px";


  } else {
    // Alert the user if the input is blank
    alert("Please enter a value");
  }
});

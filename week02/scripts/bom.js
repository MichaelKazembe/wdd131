//  Initiate the variables
const input = document.querySelector('#favhap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create new list item and delete buttom
const listItem = document.createElement('li');
const deleteButton = document.createElement('button');

//  Populate the list item with the input value
listItem.textContent = input.value;

// Populate the delete button with an ❌
deleteButton.textContent = '❌';
// Add aria-label to the delete button
deleteButton.setAttribute('aria-label', 'delete item');

// Append list item variable with delete button
listItem.appendChild(deleteButton);

// Append the list item to the unordered list
list.appendChild(listItem);

// Select the elements where the dates will be displayed
const currentYearElement = document.querySelector("#currentdate");
const lastModifiedElement = document.querySelector("#last-modified-date");

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the current year in the footer's first paragraph
currentYearElement.textContent = currentYear;

// Set the last modified date in the footer's second paragraph
lastModifiedElement.textContent = lastModified;

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');
  const closeIcon = document.querySelector('.close-icon');

  // Open menu
  hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburgerMenu.classList.add('active');
    closeIcon.classList.add('visible'); // Show close icon
  });

  // Close menu
  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    closeIcon.classList.remove('visible'); // Hide close icon
  });
});

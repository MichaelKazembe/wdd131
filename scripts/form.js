// PRODUCT ARRAY

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// Dynamically populate the product dropdown
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-name");

  // Loop through the products array and create <option> elements
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} (Rating: ${product.averagerating})`;
    productSelect.appendChild(option);
  });
});

// Function to increment the review counter
function incrementReviewCounter() {
  // Check if the counter exists in localStorage
  let reviewCount = localStorage.getItem("reviewCounter");

  // If it doesn't exist, initialize it to 0
  if (!reviewCount) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount, 10); // Ensure it's parsed as an integer
  }

  // Increment the counter
  reviewCount++;

  // Save the updated counter back to localStorage
  localStorage.setItem("reviewCounter", reviewCount);

  // Display the updated counter to the user
  const reviewCountDisplay = document.getElementById("reviewCountDisplay");
  if (reviewCountDisplay) {
    reviewCountDisplay.textContent = `Reviews Completed: ${reviewCount}`;
  }
}

// Ensure the function is only called once when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Display the current review count without incrementing
  const reviewCount = localStorage.getItem("reviewCounter") || 0;
  const reviewCountDisplay = document.getElementById("reviewCountDisplay");
  if (reviewCountDisplay) {
    reviewCountDisplay.textContent = `Reviews Completed: ${reviewCount}`;
  }

  // Increment the counter when the form is submitted
  const form = document.getElementById("product-review-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      incrementReviewCounter();
    });
  }
});

// D

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

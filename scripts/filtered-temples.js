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
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");
  const closeIcon = document.querySelector(".close-icon");

  // Open menu
  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
    hamburgerMenu.classList.add("active");
    closeIcon.classList.add("visible"); // Show close icon
  });

  // Close menu
  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburgerMenu.classList.remove("active");
    closeIcon.classList.remove("visible"); // Hide close icon
  });
});

// Array of temple objects

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-36823.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 107688,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-57277.jpg",
  },
  {
    templeName: "Vernal Utah",
    location: "Vernal, Utah, United States",
    dedicated: "1997, November, 2",
    area: 38000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-15070.jpg"
  },
];
// Select the section where the temples will be displayed
const templesSection = document.querySelector(".temples-gallery");

// Create a function to display the temples dynamically
function displayTemples(temples) {
  // Clear any existing content in the section
  templesSection.textContent = "";

  // Loop through the temples array and create elements for each temple
  temples.forEach((temple) => {
    // Create the figure element
    const figure = document.createElement("figure");
    figure.classList.add("temple");

    // Create the image element
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.classList.add("fig-image");
    img.loading = "lazy";

    // Create the figcaption element
    const figcaption = document.createElement("figcaption");

    // Create the h3 element for the temple name
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create the location paragraph
    const locationP = document.createElement("p");
    locationP.innerHTML = `<span>LOCATION:</span> ${temple.location}`;

    // Create the dedicated paragraph
    const dedicatedP = document.createElement("p");
    dedicatedP.innerHTML = `<span>DEDICATED:</span> ${temple.dedicated}`;

    // Create the area paragraph
    const areaP = document.createElement("p");
    areaP.innerHTML = `<span>AREA:</span> ${temple.area.toLocaleString()} SQUARE FEET`;

    // Append all elements to the figcaption
    figcaption.appendChild(h3);
    figcaption.appendChild(locationP);
    figcaption.appendChild(dedicatedP);
    figcaption.appendChild(areaP);

    // Append the image and figcaption to the figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Append the figure to the temples section
    templesSection.appendChild(figure);
  });
}

// Display all temples by default
displayTemples(temples);


// Filter Temples

// Filter Old Temples
function filterOldTemples() {
  const filtered = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(filtered);
}

// Filter New Temples
function filterNewTemples() {
  const filtered = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 2000;
  });
  displayTemples(filtered);
}

// Filter Temples by Largest Area
function filterLargeTemples() {
  const filtered = temples.filter((temple) => temple.area > 90000);
  displayTemples(filtered);
}

// Filter Temples by Smallest Area
function filterSmallTemples() {
  const filtered = temples.filter((temple) => temple.area < 10000);
  displayTemples(filtered);
}

// Show all temples
function showAllTemples() {
  displayTemples(temples);
}

// Add event listeners to navigation menu items
document.querySelector(".nav-list").addEventListener("click", (event) => {
  const target = event.target.textContent.trim();

  if (target === "Old") {
    filterOldTemples();
  } else if (target === "New") {
    filterNewTemples();
  } else if (target === "Large") {
    filterLargeTemples();
  } else if (target === "Small") {
    filterSmallTemples();
  } else if (target === "Home") {
    showAllTemples();
  }
});

// Display all temples by default
showAllTemples();

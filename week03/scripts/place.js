// Function to calculate wind chill in Celsius
function calculateWindChill(temperature, windSpeed) {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  );
}

// Function to update the wind chill display
function updateWindChill() {
  const temperatureElement = document.querySelector(".temperature");
  const windSpeedElement = document.querySelector(".wind");
  const windChillElement = document.querySelector(".chill");

  // Extract temperature and wind speed values
  const temperatureText = temperatureElement.textContent.split(" ")[1];
  const windSpeedText = windSpeedElement.textContent.split(" ")[1];

  // Parse values (assuming temperature is in °C and wind speed is in km/h)
  const temperature = parseFloat(temperatureText);
  const windSpeed = parseFloat(windSpeedText);

  // Check if wind chill calculation is viable
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    windChillElement.textContent = `Wind Chill: ${windChill} °C`;
  } else {
    windChillElement.textContent = "Wind Chill: N/A";
  }
}

// Update wind chill when the page loads
window.onload = updateWindChill;

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

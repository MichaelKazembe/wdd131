/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function toggleMenu() {
  const nav = document.getElementById("myNavBar");
  const icon = document.getElementById("menuToggleIcon").querySelector("i");

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}

// POPULAR MALAWI DISHES

const popularDishes = [
  {
    name: "Nsima",
    description: "A staple food made from maize flour, similar to polenta.",
    imageUrl: "/project/images/Nsima-1.jpeg",
  },
  {
    name: "Chambo",
    description: "A popular fish dish, often grilled or fried.",
    imageUrl: "/project/images/chambo-fish-1.jpeg",
  },
  {
    name: "Kachumbari",
    description: "A fresh salad made with tomatoes, onions, and chili peppers.",
    imageUrl: "/project/images/Kachumbari-1.jpeg",
  },
];

// Dynamically populate the .recipe-grid with popular dishes
const recipeGrid = document.querySelector(".recipe-grid");

popularDishes.forEach((dish) => {
  const dishElement = document.createElement("div");
  dishElement.innerHTML = `
    <figure class="fig-element">
      <img
        src="${dish.imageUrl}"
        alt="${dish.name}"
        class="fig-image"
      />
      <figcaption class="fig-caption">
        <h4>${dish.name}</h4>
        <p>${dish.description}</p>
        <button class="secondary-button">View Recipe</button>
      </figcaption>
    </figure>
  `;
  recipeGrid.appendChild(dishElement);
});

// ESSENTIAL MALAWI INGREDIENTS

const essentialIngredients = [
  {
    name: "Maize Flour",
    description: "The primary ingredient for making Nsima.",
    imageUrl: "/project/images/maize-flour-1.jpeg",
  },
  {
    name: "Fish",
    description: "Commonly used in various dishes, especially Chambo.",
    imageUrl: "/project/images/chambo-fish-dry.jpeg",
  },
  {
    name: "Tomatoes",
    description: "Used in salads and sauces.",
    imageUrl: "/project/images/Tomatoes-1.jpeg",
  },
  {
    name: "Groundnuts",
    description: "Often used to make sauces or as a snack.",
    imageUrl: "/project/images/groundnut-powder-1.jpeg",
  }
];
// Dynamically populate the .ingredient-grid with essential ingredients
const ingredientGrid = document.querySelector(".essential-grid");
essentialIngredients.forEach((ingredient) => {
  const ingredientElement = document.createElement("div");
  ingredientElement.innerHTML = `
    <figure class="fig-element">
      <img
        src="${ingredient.imageUrl}"
        alt="${ingredient.name}"
        class="essential-fig-image"
      />
      <figcaption class="essential-fig-caption">
        <h4>${ingredient.name}</h4>
        <p>${ingredient.description}</p>
      </figcaption>
    </figure>
  `;
  ingredientGrid.appendChild(ingredientElement);
});


//  RESTAURANT RECOMMENDATIONS
const restaurantRecommendations = [
  {
    name: "Lilongwe Grill",
    description: "A popular spot for local Malawian cuisine.",
    imageUrl: "project/images/maceio-brazil-temple.jpg",
    rating: 4.5,
    location: "City Center, Lilongwe", // Added location property
  },
  {
    name: "Zomba Café",
    description: "Known for its beautiful views and delicious dishes.",
    imageUrl: "project/images/maceio-brazil-temple.jpg",
    rating: 4,
    location: "Zomba Plateau, Zomba", // Added location property
  },
  {
    name: "Blantyre Bistro",
    description: "Offers a mix of local and international dishes.",
    imageUrl: "project/images/maceio-brazil-temple.jpg",
    rating: 3.5,
    location: "Downtown, Blantyre", // Added location property
  },
];

// Dynamically populate the .restaurant-grid with restaurant recommendations
const restaurantGrid = document.querySelector(".restaurant-grid");

restaurantRecommendations.forEach((restaurant) => {
  const restaurantElement = document.createElement("div");
  restaurantElement.classList.add("restaurant");

  // Generate rating stars dynamically
  const fullStars = Math.floor(restaurant.rating);
  const halfStar = restaurant.rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="fas fa-star"></i>`;
  }
  if (halfStar) {
    starsHTML += `<i class="fas fa-star-half-alt"></i>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<i class="far fa-star"></i>`;
  }

  restaurantElement.innerHTML = `
    <h4>${restaurant.name}</h4>
    <p>${restaurant.description}</p>
    <div class="location">
      <p>
        <i class="fas fa-map-marker-alt"></i>
        ${restaurant.location}
      </p>
    </div>
    <!-- Rating Stars -->
    <div class="rating-stars">
      ${starsHTML}
    </div>
  `;
  restaurantGrid.appendChild(restaurantElement);
});

// FOOTER YEAR

// Dynamically set the current year
document.getElementById("current-year").textContent = new Date().getFullYear();
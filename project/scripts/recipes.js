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

// Array of recipes
const recipes = [
  {
    id: "recipe-1",
    name: "Nsima with Ndiwo",
    image: "images/Nsima-2.jpeg",
    description:
      "A staple Malawian dish served with a side of vegetables or meat.",
    duration: "30 minutes",
    servings: "4 servings",
    rating: 4.8,
    ingredients: [
      "2 cups maize flour",
      "4 cups water",
      "Vegetables or meat for ndiwo",
    ],
    steps: [
      "Boil water in a pot.",
      "Gradually add maize flour while stirring continuously to avoid lumps.",
      "Cook and stir until the mixture thickens and pulls away from the sides of the pot.",
      "Serve hot with ndiwo (vegetables or meat).",
    ],
  },
  {
    id: "recipe-2",
    name: "Chambo Fish",
    image: "images/chambo-fish-3.jpeg",
    description: "Grilled Chambo fish, a delicacy from Lake Malawi.",
    duration: "45 minutes",
    servings: "2 servings",
    rating: 4.7,
    ingredients: [
      "2 Chambo fish",
      "1 tablespoon olive oil",
      "1 teaspoon paprika",
      "1 teaspoon garlic powder",
      "Salt and pepper to taste",
    ],
    steps: [
      "Preheat the grill to medium heat.",
      "Clean the fish and pat dry.",
      "Rub the fish with olive oil, paprika, garlic powder, salt, and pepper.",
      "Grill the fish for 5-7 minutes on each side until cooked through.",
      "Serve with vegetables or nsima.",
    ],
  },
  {
    id: "recipe-3",
    name: "Mandasi",
    image: "images/mandasi-1.jpeg",
    description: "Sweet fried dough, perfect for breakfast or snacks.",
    duration: "20 minutes",
    servings: "6 servings",
    rating: 4.5,
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup sugar",
      "1 teaspoon baking powder",
      "1/2 cup milk",
      "Oil for frying",
    ],
    steps: [
      "Mix flour, sugar, and baking powder in a bowl.",
      "Gradually add milk and mix to form a soft dough.",
      "Roll out the dough and cut into desired shapes.",
      "Heat oil in a pan and fry the dough until golden brown.",
      "Serve warm as a snack or breakfast item.",
    ],
  },
  // Add more recipes as needed...
];

// Function to generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

// Function to render recipes dynamically
function renderRecipes(recipes) {
  const recipeGrid = document.querySelector(".recipe-grid");
  recipeGrid.innerHTML = ""; // Clear any existing content

  recipes.forEach((recipe) => {
    const recipeCard = `
      <figure class="recipe-card" data-id="${recipe.id}">
        <img src="${recipe.image}" alt="${recipe.name}" class="fig-image" loading="lazy" />
        <figcaption class="fig-caption">
          <h4>${recipe.name}</h4>
          <p>${recipe.description}</p>
          <div class="recipe-meta">
            <p><i class="fas fa-clock"></i> ${recipe.duration}</p>
            <p><i class="fas fa-users"></i> ${recipe.servings}</p>
            <p class="rating">${generateStarRating(recipe.rating)}</p>
          </div>  
          <button class="secondary-button view-details-button">View Details</button>
        </figcaption>
      </figure>
    `;
    recipeGrid.insertAdjacentHTML("beforeend", recipeCard);
  });

  // Attach event listeners to "View Details" buttons
  attachViewDetailsListeners();
}

// Function to display recipe details
function displayRecipeDetails(recipe) {
  const recipeDetailsSection = document.querySelector(".recipe-details");
  recipeDetailsSection.innerHTML = `
    <div class="recipe-details-content">
      <img src="${recipe.image}" alt="${recipe.name}" class="details-image" />
      <div class="details-text">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <div class="recipe-meta">
          <p><i class="fas fa-clock"></i> ${recipe.duration}</p>
          <p><i class="fas fa-users"></i> ${recipe.servings}</p>
          <p class="rating">${generateStarRating(recipe.rating)}</p>
        </div>
        <h4>Ingredients</h4>
        <ul class="ingredients-list">
          ${recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("")}
        </ul>
        <h4>Preparation Steps</h4>
        <ol class="preparation-steps">
          ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    </div>
  `;
  recipeDetailsSection.classList.add("visible");
}

// Function to attach event listeners to "View Details" buttons
function attachViewDetailsListeners() {
  const buttons = document.querySelectorAll(".view-details-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const recipeId = e.target.closest(".recipe-card").dataset.id;
      const recipe = recipes.find((r) => r.id === recipeId);
      if (recipe) {
        displayRecipeDetails(recipe);
      }
    });
  });
}

// Render recipes on page load
renderRecipes(recipes);

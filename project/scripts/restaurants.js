// Restaurant data
const restaurants = [
  {
    id: "restaurant-1",
    name: "Chambo Delight",
    image: "/project/images/chambo-fish-2.jpeg",
    description: "Specializes in fresh Chambo dishes and traditional Malawian sides.",
    location: "Lilongwe, Malawi",
    rating: 4.5,
    details: "Chambo Delight offers a variety of dishes made from fresh Chambo fish, paired with traditional Malawian sides like nsima and ndiwo. The restaurant is known for its cozy atmosphere and excellent customer service.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b4c4b1%3A0x4e9b8f1f4b4c4b1!2sLilongwe%2C%20Malawi!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus",
    reviews: [
      { name: "John Doe", comment: "Amazing food and great service!" },
      { name: "Jane Smith", comment: "The Chambo fish was delicious!" },
    ],
    popularDishes: [
      { name: "Grilled Chambo", image: "images/dishes/grilled-chambo.jpg" },
      { name: "Nsima", image: "images/dishes/nsima.jpg" },
    ],
    contact: {
      phone: "+265 123 456 789",
      email: "info@chambodelight.mw",
      website: "https://www.chambodelight.mw",
    },
  },
  {
    id: "restaurant-2",
    name: "Nsima Haven",
    image: "/project/images/Nsima-1.jpeg",
    description: "A cozy spot offering the best nsima and ndiwo combinations.",
    location: "Blantyre, Malawi",
    rating: 4.8,
    details: "Nsima Haven is a must-visit for anyone looking to enjoy authentic Malawian cuisine. Their nsima is perfectly prepared and served with a variety of ndiwo options, including pumpkin leaves and groundnut flour relish.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b4c4b1%3A0x4e9b8f1f4b4c4b1!2sBlantyre%2C%20Malawi!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus",
    reviews: [
      { name: "Alice Brown", comment: "Best nsima I've ever had!" },
      { name: "Bob White", comment: "Great atmosphere and delicious food." },
    ],
    popularDishes: [
      { name: "Pumpkin Leaves Ndiwo", image: "images/dishes/pumpkin-leaves.jpg" },
      { name: "Groundnut Relish", image: "images/dishes/groundnut-relish.jpg" },
    ],
    contact: {
      phone: "+265 987 654 321",
      email: "info@nsimahaven.mw",
      website: "https://www.nsimahaven.mw",
    },
  },
  {
    id: "restaurant-3",
    name: "Thobwa Treats",
    image: "/project/images/thobwa-2.jpeg",
    description: "Known for its refreshing thobwa and sweet Malawian snacks.",
    location: "Mzuzu, Malawi",
    rating: 4.2,
    details: "Thobwa Treats specializes in traditional Malawian beverages like thobwa, along with a selection of sweet snacks such as mandasi and mbatata puffs. It's a great place to relax and enjoy local flavors.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b4c4b1%3A0x4e9b8f1f4b4c4b1!2sMzuzu%2C%20Malawi!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus",
    reviews: [
      { name: "Chris Green", comment: "The thobwa was so refreshing!" },
      { name: "Diana Blue", comment: "Loved the mandasi and the cozy atmosphere." },
    ],
    popularDishes: [
      { name: "Mandasi", image: "images/dishes/mandasi.jpg" },
      { name: "Thobwa", image: "images/dishes/thobwa.jpg" },
    ],
    contact: {
      phone: "+265 456 789 123",
      email: "info@thobwatreats.mw",
      website: "https://www.thobwatreats.mw",
    },
  },
  {
    id: "restaurant-4",
    name: "Mandasi Corner",
    image: "/project/images/mandasi-2.jpeg",
    description: "Perfect for breakfast with freshly made mandasi and tea.",
    location: "Zomba, Malawi",
    rating: 4.7,
    details: "Mandasi Corner is the perfect breakfast spot, offering freshly made mandasi paired with tea or coffee. The warm and inviting ambiance makes it a favorite among locals and tourists alike.",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468132!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b4c4b1%3A0x4e9b8f1f4b4c4b1!2sZomba%2C%20Malawi!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus",
    reviews: [
      { name: "Eve White", comment: "The best mandasi I've ever had!" },
      { name: "Mark Black", comment: "Great tea and a lovely place to start the day." },
    ],
    popularDishes: [
      { name: "Mandasi", image: "images/dishes/mandasi.jpg" },
      { name: "Tea", image: "images/dishes/tea.jpg" },
    ],
    contact: {
      phone: "+265 321 654 987",
      email: "info@mandasicorner.mw",
      website: "https://www.mandasicorner.mw",
    },
  },
];

// Function to display restaurants dynamically
function displayRestaurants(restaurants) {
  const restaurantGrid = document.querySelector(".restaurant-grid");
  restaurantGrid.innerHTML = ""; // Clear any existing content

  restaurants.forEach((restaurant) => {
    const restaurantCard = `
      <div class="restaurant-card" data-id="${restaurant.id}">
        <figure class="fig-element">
          <img src="${restaurant.image}" alt="${restaurant.name}" class="fig-image" loading="lazy"/>
          <figcaption class="fig-caption">
            <h4>${restaurant.name}</h4>
            <p>${restaurant.description}</p>
            <div class="restaurant-meta">
              <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}</span>
              <span class="rating">
                ${generateStarRating(restaurant.rating)}
              </span>
            </div>
            <button class="secondary-button view-details-button">View Details</button>
          </figcaption>
        </figure>
      </div>
    `;
    restaurantGrid.insertAdjacentHTML("beforeend", restaurantCard);
  });

  // Attach event listeners to "View Details" buttons
  attachViewDetailsListeners();
}

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

// Function to attach event listeners to "View Details" buttons
function attachViewDetailsListeners() {
  const buttons = document.querySelectorAll(".view-details-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const restaurantId = e.target.closest(".restaurant-card").dataset.id;
      const restaurant = restaurants.find((r) => r.id === restaurantId);
      if (restaurant) {
        displayRestaurantDetails(restaurant);
      }
    });
  });
}

// Function to display detailed restaurant information
function displayRestaurantDetails(restaurant) {
  const restaurantDetailsSection = document.querySelector(".restaurant-details");
  restaurantDetailsSection.innerHTML = `
    <div class="restaurant-details-content">
      <img src="${restaurant.image}" alt="${restaurant.name}" class="details-image" />
      <div class="details-text">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.details}</p>
        <div class="details-meta">
          <span><i class="fas fa-map-marker-alt"></i> ${restaurant.location}</span>
          <span class="rating">
            ${generateStarRating(restaurant.rating)}
          </span>
        </div>
        <h4>Popular Dishes</h4>
        <div class="popular-dishes">
          ${restaurant.popularDishes
            .map(
              (dish) => `
            <div class="dish">
              <img src="${dish.image}" alt="${dish.name}" />
              <p>${dish.name}</p>
            </div>
          `
            )
            .join("")}
        </div>
        <h4>Client Reviews</h4>
        <ul class="reviews">
          ${restaurant.reviews
            .map(
              (review) => `
            <li>
              <strong>${review.name}:</strong> ${review.comment}
            </li>
          `
            )
            .join("")}
        </ul>
        <h4>Contact Information</h4>
        <p><strong>Phone:</strong> ${restaurant.contact.phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${restaurant.contact.email}">${restaurant.contact.email}</a></p>
        <p><strong>Website:</strong> <a href="${restaurant.contact.website}" target="_blank">${restaurant.contact.website}</a></p>
        <h4>Location</h4>
        <iframe
          src="${restaurant.mapEmbed}"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;
  restaurantDetailsSection.classList.add("visible");
}

// Display all restaurants on page load
displayRestaurants(restaurants);
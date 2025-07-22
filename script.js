// DOM Elements
const graphic = document.querySelector('.graphic');
const logo = document.getElementById('logo');
const curlyImages = document.querySelectorAll('.curly-img');
const projectCards = document.querySelectorAll('.project-card');

// Get all elements that should have dynamic shadows (excluding logo/prof1 image)
const shadowElements = document.querySelectorAll('.curly-img, .project-card, .mini-terminal, .middle-text button');

// Car Controller Instance
let carController;

// Configuration - vehicle cycling system
const VEHICLE_TYPES = ['car', 'plane', 'boat']; // Cycle order: car → plane → boat → car
let currentVehicleIndex = 0; // Start with car (index 0)
let VEHICLE_TYPE = VEHICLE_TYPES[currentVehicleIndex];

// Event Handlers
const toggleGraphicCollapse = () => {
  graphic.classList.toggle('collapsed');
};

const showCompileSpinner = () => {
  const spinner = document.createElement('div');
  spinner.className = 'compile-spinner';
  spinner.innerHTML = '<span>&lt;/&gt;</span>';
  logo.parentElement.appendChild(spinner);
  setTimeout(() => spinner.remove(), 1000);
};

// Vehicle cycling functionality
const cycleVehicle = () => {
  // Show compile spinner for visual feedback
  showCompileSpinner();
  
  // Wait for loading animation to complete (1 second) before switching vehicle
  setTimeout(() => {
    // Move to next vehicle in the cycle
    currentVehicleIndex = (currentVehicleIndex + 1) % VEHICLE_TYPES.length;
    VEHICLE_TYPE = VEHICLE_TYPES[currentVehicleIndex];
    
    // Switch to the new vehicle
    if (carController) {
      carController.switchVehicle(VEHICLE_TYPE);
    }
    
    console.log(`Switched to: ${VEHICLE_TYPE}`);
  }, 1000); // Wait 1 second for the spinner animation to complete
};

const handleProjectCardClick = (card) => {
  // Toggle active state
  card.classList.toggle('active');
  
  // Remove active state after 3 seconds
  setTimeout(() => {
    card.classList.remove('active');
  }, 3000);
};

// Dynamic shadow effect based on mouse position
const updateShadows = (e) => {
  const mouseX = e.clientX;
  const screenWidth = window.innerWidth;
  
  // Calculate shadow offset based on mouse position
  // When mouse is on left, shadow goes right (positive offset)
  // When mouse is on right, shadow goes left (negative offset)
  const normalizedX = (mouseX / screenWidth) * 2 - 1; // -1 to 1
  const shadowOffsetX = -normalizedX * 15; // Invert and scale
  const shadowOffsetY = 8; // Always cast shadow downward
  
  // Apply dynamic shadows to all elements
  shadowElements.forEach(element => {
    const shadowBlur = 12;
    const shadowOpacity = 0.3;
    element.style.boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity})`;
  });
};

// Event Listeners
curlyImages.forEach(img => {
  img.addEventListener('click', toggleGraphicCollapse);
});

logo.addEventListener('click', cycleVehicle);

projectCards.forEach(card => {
  card.addEventListener('click', () => handleProjectCardClick(card));
});

// Add mouse move listener for dynamic shadows
document.addEventListener('mousemove', updateShadows);

// Initialize shadows on page load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the 3D vehicle controller with chosen vehicle type
  carController = new CarController(VEHICLE_TYPE);
  carController.initVehicle();
  
  // Set initial vehicle position just above "Thank you for your support!" text
  const initialX = window.innerWidth / 2;
  const initialY = window.innerHeight * 0.55; // A bit higher up - around 55% down the page
  carController.setInitialPosition(initialX, initialY);
  
  // Set initial shadow position (center)
  updateShadows({ clientX: window.innerWidth / 2 });
});

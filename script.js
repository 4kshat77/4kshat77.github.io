// DOM Elements
const graphic = document.querySelector('.graphic');
const logo = document.getElementById('logo');
const curlyImages = document.querySelectorAll('.curly-img');
const projectCards = document.querySelectorAll('.project-card');

// Get all elements that should have dynamic shadows (excluding logo/prof1 image)
const shadowElements = document.querySelectorAll('.curly-img, .project-card, .mini-terminal, .middle-text button');

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

logo.addEventListener('click', showCompileSpinner);

projectCards.forEach(card => {
  card.addEventListener('click', () => handleProjectCardClick(card));
});

// Add mouse move listener for dynamic shadows
document.addEventListener('mousemove', updateShadows);

// Initialize shadows on page load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial shadow position (center)
  updateShadows({ clientX: window.innerWidth / 2 });
});

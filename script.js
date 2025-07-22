// DOM Elements
const graphic = document.querySelector('.graphic');
const logo = document.getElementById('logo');
const curlyImages = document.querySelectorAll('.curly-img');
const projectCards = document.querySelectorAll('.project-card');

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

// Event Listeners
curlyImages.forEach(img => {
  img.addEventListener('click', toggleGraphicCollapse);
});

logo.addEventListener('click', showCompileSpinner);

projectCards.forEach(card => {
  card.addEventListener('click', () => handleProjectCardClick(card));
});

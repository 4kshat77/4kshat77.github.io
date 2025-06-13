// DOM Elements
const graphic = document.querySelector('.graphic');
const logo = document.getElementById('logo');
const curlyImages = document.querySelectorAll('.curly-img');

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

// Event Listeners
curlyImages.forEach(img => {
  img.addEventListener('click', toggleGraphicCollapse);
});

logo.addEventListener('click', showCompileSpinner);

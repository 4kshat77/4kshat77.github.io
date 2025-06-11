// 1) Toggle “collapsed” on the graphic when either image is clicked
const graphic = document.querySelector('.graphic');
document.querySelectorAll('.curly-img').forEach(img => {
  img.addEventListener('click', () => {
    graphic.classList.toggle('collapsed');
  });
});

// 2) Show a brief “compile”-style spinner when the logo is clicked
document.getElementById('logo').addEventListener('click', function() {
  const spinner = document.createElement('div');
  spinner.className = 'compile-spinner';
  spinner.innerHTML = '<span>&lt;/&gt;</span>';
  this.parentElement.appendChild(spinner);
  setTimeout(() => spinner.remove(), 1000);
});

// Add this to your script.js
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const navRight = document.querySelector('.nav_right');

  mobileMenuButton.addEventListener('click', function() {
    navRight.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav_container')) {
      navRight.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
      navRight.classList.remove('active');
    });
  });
});
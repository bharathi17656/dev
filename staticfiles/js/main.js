document.addEventListener("DOMContentLoaded", function() {
  var nameElement = document.querySelector('.name1');
  var duration = 4000; // Duration of the typing animation in milliseconds

  // Add the animation class
  nameElement.classList.add('typing-animation');

  // Remove the animation class after the duration
  setTimeout(function() {
      nameElement.classList.remove('typing-animation');
  }, duration);
});

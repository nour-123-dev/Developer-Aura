document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I'm Nour ^_^";
    const typedText = document.getElementById("typed-text");
    let index = 0;
  
    const typeWriter = () => {
      if (index < text.length) {
        typedText.textContent += text[index];
        index++;
        setTimeout(typeWriter, 200); // Adjust typing speed here
      }
    };
  
    typeWriter();
  });

// Function to show the text when the user scrolls down
window.addEventListener('scroll', function() {
    var passionText = document.getElementById('passionText');
    var scrollPosition = window.scrollY; // Get the scroll position

    // Check if the user has scrolled down enough (e.g., 150px)
    if (scrollPosition > 150) {
        passionText.style.visibility = 'visible';
        passionText.style.opacity = '1'; // Make it fully visible
    }
});

window.onload = () => {
    const star = document.getElementById('star');
    // Set initial position of the star (from the "E" in "me")
    star.style.top = '50%'; // Adjust as needed based on your layout
    star.style.left = '50%'; // Adjust as needed based on your layout
  };

  const rows = document.querySelectorAll("#skills-table tr");
let currentIndex = 0;

function changeRowColor() {
  // Remove previous highlight
  rows.forEach(row => row.classList.remove("highlight-row"));
  
  // Add new highlight to the current row
  rows[currentIndex].classList.add("highlight-row");
  
  // Move to the next row, and loop around if it reaches the end
  currentIndex = (currentIndex + 1) % rows.length;
}

// Change color every 1 second
setInterval(changeRowColor, 1000);

function toggleMessage() {
    const message = document.getElementById('message');
    message.classList.toggle('hidden');
}

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');

    // Wrap around slides
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    // Hide all slides and show the current one
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[currentSlideIndex].style.display = 'block';

    // Hide navigation buttons on the first and last slides
    document.querySelector('.prev').style.display = currentSlideIndex === 0 ? 'none' : 'block';
    document.querySelector('.next').style.display =
        currentSlideIndex === slides.length - 1 ? 'none' : 'block';
}

function nextSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

// Initialize the first slide
showSlide(currentSlideIndex);


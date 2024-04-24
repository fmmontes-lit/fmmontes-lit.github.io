console.log('Hello, World!');

const images = [
  { src: '/images/ead/LIT08370.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08371.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08372.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08373.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08374.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08375.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08376.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08377.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08378.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08379.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08380.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08381.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08382.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08383.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08384.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08385.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08386.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08387.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08388.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08389.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08390.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08391.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08392.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08393.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08394.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08395.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08396.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08397.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08398.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08399.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08400.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08401.jpg', text: 'LIT' },
  { src: '/images/ead/LIT08402.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT08403.jpg', text: 'LIT' },
  { src: '/images/ead/LIT083404.jpg', text: 'CULTURE' },
  { src: '/images/ead/LIT083405.jpg', text: 'LIT' }
];

for (i in images) {
  console.log(images[i].src);
}

// Get references to DOM elements
const imageContainer = document.querySelector('.image-container');
const imageText = document.querySelector('.image-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// Index of the currently displayed image
let currentImageIndex = 0;

// Function to update the carousel state
function updateCarousel() {
  const currentImage = images[currentImageIndex];

  // Clear existing dots (optional)
  const dotsContainer = document.querySelector('.dots');
  dotsContainer.innerHTML = '';

  // Create and update dots
  for (let i = 0; i < images.length; i++) {
    let dotElement;
    if (dotsContainer.children.length <= i) {
      dotElement = document.createElement('div');
      dotElement.classList.add('dot');
      dotsContainer.appendChild(dotElement);
    } else {
      dotElement = dotsContainer.children[i];
    }

    dotElement.classList.toggle('active-dot', i === currentImageIndex);
    dotElement.addEventListener('click', () => handleDotClick(i));
  }

  // Update the image and text
  imageContainer.classList.add('fade-out');
  setTimeout(() => {
    imageContainer.style.opacity = 0; // set opacity to 0
  }, 0); // apply opacity change immediately

  setTimeout(() => {
    imageContainer.style.backgroundImage = `url(${currentImage.src})`;
    imageContainer.style.opacity = 1; // set opacity to 1
    imageContainer.classList.remove('fade-out');
  }, 500); // adjust delay based on desired effect

  imageContainer.style.backgroundSize = '100% 100%';
  imageText.textContent = currentImage.text;

  // Update the active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle('active-dot', index === currentImageIndex);
  });
}

// Function to handle the previous button click
function handlePrevButtonClick() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
}

// Function to handle the next button click
function handleNextButtonClick() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}

// Function to handle the dot click
function handleDotClick(index) {
  currentImageIndex = index;
  updateCarousel();
}

// Add event listeners to the buttons and dots
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => handleDotClick(index));
});

// Initialize the carousel
updateCarousel();
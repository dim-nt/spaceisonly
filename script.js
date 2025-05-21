// Array of words to rotate
const words = ["interior", "graphic", "photography", "design studio"]; 
let index = 0; 

function rotateWord() {
  const rotatingContainer = document.getElementById("rotating-container");
  if (!rotatingContainer) return; 

  requestAnimationFrame(() => {
    const existingWord = rotatingContainer.querySelector(".rotating-word");
    if (existingWord) existingWord.remove();

    const nextWord = document.createElement("span");
    nextWord.classList.add("rotating-word");
    nextWord.textContent = words[index];
    rotatingContainer.appendChild(nextWord);

    requestAnimationFrame(() => {
        setTimeout(() => { void nextWord.offsetHeight; }, 0);
    });
    index = (index + 1) % words.length;
  });
}

const initialRotatingContainer = document.getElementById("rotating-container");
if (initialRotatingContainer) {
  rotateWord(); 
  setInterval(rotateWord, 5000); 
}

const boxes = document.querySelectorAll(".box");
const observerOptions = { root: null, threshold: 0.1 };
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      obs.unobserve(entry.target); 
    }
  });
}, observerOptions);
boxes.forEach((box) => observer.observe(box));

const newsletterButton = document.getElementById("newsletter-button");
if (newsletterButton) {
    newsletterButton.addEventListener("click", () => {
        alert("Thank you! Newsletter sign-up coming soon.");
    });
}

const hamburgerIcon = document.querySelector('.hamburger-icon');
const body = document.body; 
const navLinksContainer = document.querySelector('.nav-links'); 

if (hamburgerIcon && body && navLinksContainer) { 
    if (!navLinksContainer.id) navLinksContainer.id = 'main-nav-links'; 
    hamburgerIcon.setAttribute('aria-controls', navLinksContainer.id);
    hamburgerIcon.setAttribute('aria-expanded', 'false'); 
    navLinksContainer.setAttribute('aria-hidden', 'true'); 

    hamburgerIcon.addEventListener('click', () => {
        const isNavOpen = body.classList.toggle('nav-open'); 
        hamburgerIcon.setAttribute('aria-expanded', isNavOpen);
        navLinksContainer.setAttribute('aria-hidden', !isNavOpen);
    });
} 

if (navLinksContainer) {
    navLinksContainer.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
             body.classList.remove('nav-open');
             if (hamburgerIcon) hamburgerIcon.setAttribute('aria-expanded', 'false');
             navLinksContainer.setAttribute('aria-hidden', 'true');
        }
    });
}

// --- SimpleLightbox Initialization ---
document.addEventListener('DOMContentLoaded', function () {
    const gallerySelector = '#twoStoryHouseGallery a'; 
    const projectImageLinks = document.querySelectorAll(gallerySelector);

    if (projectImageLinks.length > 0) {
        new SimpleLightbox(gallerySelector, {
            captionsData: 'title', 
            captionDelay: 250,
            // loop: true, // Default is true
            // nav: true, // Default is true
            // close: true, // Default is true
        });
    }
});
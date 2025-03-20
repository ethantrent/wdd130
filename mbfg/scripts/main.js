// Create and append the back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

// Show/hide back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});

// Section Animations using Intersection Observer
const sections = document.querySelectorAll('.section');

// Configure the observer options
const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px', // No margin
    threshold: 0.1 // Trigger when 10% of element is visible
};

// Create observer to handle section animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when section comes into view
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion buttons
    const accordions = document.querySelectorAll('.accordion');

    // Add click event listener to each accordion button
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Toggle active class on the clicked accordion
            this.classList.toggle('active');

            // Get and toggle the associated panel
            const panel = this.nextElementSibling;
            panel.classList.toggle('show');

            // Update ARIA attributes for accessibility
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });
}); 
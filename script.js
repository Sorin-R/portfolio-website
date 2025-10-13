// Select burger and nav elements
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

// When burger is clicked
burger.addEventListener('click', () => {
    // Toggle the open class for the nav
    navMenu.classList.toggle('open');

    // Change the burger icon between ☰ and ✕
    if (burger.textContent === '☰') {
        burger.textContent = '✕';
    } else {
        burger.textContent = '☰';
    }
});

// Optional: close menu when clicking a nav link
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        burger.textContent = '☰'; // back to burger
    });
});

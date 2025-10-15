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

// Dark mode toggle button.
const modeToggle = document.getElementById('mode-toggle');

if (modeToggle) {
    // Check saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        modeToggle.textContent = '☀️ Light Mode';
    }

    // Toggle dark/light mode
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const darkModeOn = document.body.classList.contains('dark');

        if (darkModeOn) {
            modeToggle.textContent = '☀️ Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            modeToggle.textContent = '🌙 Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
} else {
    console.warn('Dark mode toggle button (#mode-toggle) not found in HTML.');
}

/* Add a subtle animation when the profile image is clicked */
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.addEventListener('click', () => {
        profileImg.classList.toggle('active');
    });
}

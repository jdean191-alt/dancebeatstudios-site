const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.dropdown');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });
}

document.addEventListener('click', () => {
    if (dropdown) dropdown.classList.remove('open');
});

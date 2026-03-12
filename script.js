/**
 * João Gabriel Portfolio - JavaScript
 * Navigation, interactions, and functionality
 */

// ==========================================
// DOM ELEMENTS
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.querySelector('.scroll-top');
const downloadBtn = document.getElementById('downloadBtn');
const downloadBtnPrimary = document.getElementById('downloadBtnPrimary');

// ==========================================
// MOBILE MENU
// ==========================================

function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

hamburger.addEventListener('click', toggleMobileMenu);

// ==========================================
// NAVIGATION
// ==========================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        closeMobileMenu();
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', () => {
    let current = 'home';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// DOWNLOAD RESUME
// ==========================================

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'joao-website.pdf';
    link.download = 'Joao_Gabriel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadResume();
});

if (downloadBtnPrimary) {
    downloadBtnPrimary.addEventListener('click', (e) => {
        e.preventDefault();
        downloadResume();
    });
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%cWelcome to João Gabriel\' s Portfolio!', 'color: #ff8c00; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS & JavaScript', 'color: #ffa500; font-size: 12px;');



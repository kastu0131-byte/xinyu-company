// Main JS for Xinyu Biotech - Visual Redesign

document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect (Transparent -> White/Glass)
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            // Toggle display flex/none or a class
            const currentDisplay = window.getComputedStyle(navLinks).display;
            if (currentDisplay === 'none') {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'rgba(255,255,255,0.95)';
                navLinks.style.backdropFilter = 'blur(10px)';
                navLinks.style.padding = '20px';
                navLinks.style.width = '200px';
                navLinks.style.borderRadius = '0 0 0 10px';
                navLinks.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            } else {
                navLinks.style.display = ''; // Reset to css default
            }
        });
    }

    // 3. Lucid Icons Init
    if (window.lucide) {
        lucide.createIcons();
    }
});

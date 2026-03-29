// Main JS for Xinyu Biotech - Visual Redesign

document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar Scroll Effect
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
            navLinks.classList.toggle('mobile-open');
        });
    }

    // 3. Lucid Icons Init
    if (window.lucide) {
        lucide.createIcons();
    }

    // 4. Custom Language Switcher (Robust DOM Simulation Method)
    const langLinks = document.querySelectorAll('.lang-menu a');

    // Poll for the Google Widget to be ready (It's now hidden but present in DOM)
    const checkGoogleWidget = setInterval(() => {
        const googleSelect = document.querySelector('.goog-te-combo');
        if (googleSelect) {
            clearInterval(checkGoogleWidget);
            console.log("Google Widget Loaded");

            langLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const langCode = link.getAttribute('data-lang');

                    // 1. Set the value
                    googleSelect.value = langCode;

                    // 2. Dispatch Events to trigger Google's listeners
                    googleSelect.dispatchEvent(new Event('change', { bubbles: true }));

                    // Optional: Update button text
                    const btnSpan = document.querySelector('.lang-btn span');
                    if (btnSpan) btnSpan.innerText = link.innerText.split(' ')[1];
                });
            });
        }
    }, 500);

    // 5. AGGRESSIVE Banner Removal (The "Killer" Script)
    // Remove iframes and body spacers
    function killBanner() {
        const frames = document.querySelectorAll('.goog-te-banner-frame');
        frames.forEach(frame => {
            frame.remove();
        });

        // Hide skiptranslate but don't delete content inside (widget needs to exist)
        const skiptranslate = document.querySelector('body > .skiptranslate');
        if (skiptranslate) {
            skiptranslate.style.visibility = 'hidden';
            skiptranslate.style.height = '0';
            skiptranslate.style.overflow = 'hidden';
        }

        // Reset body style
        if (document.body.style.top !== '0px') {
            document.body.style.top = '0px';
            document.body.style.position = 'static';
        }
    }

    setInterval(killBanner, 100);

    // CSS Injection to help hide the banner ui but keep logic
    const style = document.createElement('style');
    style.innerHTML = `
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; }
        .goog-tooltip { display: none !important; }
        .goog-te-balloon-frame { display: none !important; }
    `;
    document.head.appendChild(style);
});

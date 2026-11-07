// Highlight the nav link of the section in view (the nav is only visible on desktop).
// Shared by the Spanish (/) and English (/en/) pages.
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav .anchor-text');
let highlightPending = false;

function highlightNavLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight * 0.25) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
    highlightPending = false;
}

// Recalculate at most once per frame while scrolling
window.addEventListener('scroll', () => {
    if (!highlightPending) {
        highlightPending = true;
        requestAnimationFrame(highlightNavLink);
    }
}, { passive: true });
highlightNavLink();

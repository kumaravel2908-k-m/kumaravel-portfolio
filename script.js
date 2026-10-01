// Portfolio JavaScript

console.log("Kumaravel Portfolio Loaded");

// Update footer year automatically

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Kumaravel K M. Built with HTML, CSS & JavaScript.`;
}
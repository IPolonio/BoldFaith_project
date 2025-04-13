document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Add hamburger menu functionality
            const hamburgerBtn = document.querySelector('.hamburger-btn');
            const navLinks = document.querySelector('.nav-links');
            
            hamburgerBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                }
            });
        });
});
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const scrollTopBtn = document.getElementById('scroll-top');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reveal animations when scrolling
    const reveal = () => {
        const reveals = document.querySelectorAll('.project-card, .course-item, .contact-item');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(element => {
            if (element.getBoundingClientRect().top < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);

    // Scroll to top button functionality
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('active', window.pageYOffset > 300);
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Add animation delays
    const setAnimationDelay = (elements, delay) => {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delay}s`;
        });
    };

    setAnimationDelay(document.querySelectorAll('.project-card'), 0.2);
    setAnimationDelay(document.querySelectorAll('.course-item'), 0.1);
    setAnimationDelay(document.querySelectorAll('.contact-item'), 0.1);

    // Call reveal on page load
    reveal();
});


// WhatsApp Button Animation
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    
    // Add a subtle animation when the page loads
    setTimeout(() => {
        whatsappBtn.classList.add('animate-in');
    }, 1000);
    
    // Optional: Track WhatsApp button clicks
    whatsappBtn.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
        // You could add analytics tracking here if needed
    });
});
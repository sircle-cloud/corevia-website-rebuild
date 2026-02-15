// COREVIA WEBSITE - Interactive JavaScript
// Pixel-perfect Figma implementation

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add backdrop blur when scrolled
        if (scrollTop > 50) {
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.backgroundColor = 'rgba(19, 19, 19, 0.95)';
        } else {
            navbar.style.backdropFilter = 'none';
            navbar.style.backgroundColor = '#131313';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Dashboard animation on scroll
    const dashboard = document.querySelector('.hero-dashboard');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const dashboardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    if (dashboard) {
        dashboardObserver.observe(dashboard);
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements sequentially
        const heroElements = document.querySelectorAll('.hero-left > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // Mobile menu toggle (for future mobile implementation)
    let mobileMenuOpen = false;
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenuOpen = !mobileMenuOpen;
            // Implementation for mobile menu
        });
    }
    
    // Initialize animations
    initAnimations();
});

// Animation system
function initAnimations() {
    // Set initial states for animated elements
    const heroLeft = document.querySelector('.hero-left');
    if (heroLeft) {
        const elements = heroLeft.querySelectorAll('> *');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
        });
    }
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add smooth reveal animations for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize section reveals
document.addEventListener('DOMContentLoaded', revealSections);
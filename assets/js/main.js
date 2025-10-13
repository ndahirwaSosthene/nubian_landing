// Main JavaScript file for Nubian Landing Page

document.addEventListener('DOMContentLoaded', function() {
    // Remove js-disabled class from body
    document.body.classList.remove('js-disabled');
    document.body.classList.add('js-enabled');
    
    // Ensure all content is visible initially
    document.querySelectorAll('section, .feature-card, .testimonial-card, .journey-milestone').forEach(el => {
        el.style.opacity = '1';
    });
    
    // Initialize scroll animation after a short delay
    setTimeout(() => {
        initScrollAnimation();
    }, 100);
    
    // Initialize navbar scroll effect
    initNavbarScroll();
    
    // Initialize mobile menu toggle
    initMobileMenu();
    
    // Initialize FAQ accordion
    initFaqAccordion();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize listen buttons for language demo
    initListenButtons();
    
    // Update active menu item when scrolling
    updateActiveMenuItem();
    
    // Add fallback to ensure content is visible
    window.addEventListener('error', function() {
        document.body.classList.add('js-disabled');
    });
});

// Update active menu item based on scroll position
function updateActiveMenuItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 100; // Add offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Animation Function
function initScrollAnimation() {
    // First make sure all content is visible by default
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.opacity = '1'; // Ensure everything is visible first
    });
    
    // Delay adding animation classes to prevent initial flicker
    setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal');
        
        const revealElements = function() {
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                } else {
                    // Only remove active class if it's outside viewport AND has animate class
                    // This prevents content from disappearing when scrolling
                    if (element.classList.contains('animate')) {
                        element.classList.remove('active');
                    }
                }
            });
        };
        
        // Add animation classes
        const sections = document.querySelectorAll('section:not(#hero)'); // Skip hero section
        sections.forEach(section => {
            section.classList.add('reveal', 'animate');
        });
        
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            card.classList.add('reveal', 'animate');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        const journeyMilestones = document.querySelectorAll('.journey-milestone');
        journeyMilestones.forEach((milestone, index) => {
            milestone.classList.add('reveal', 'animate');
            milestone.style.transitionDelay = `${index * 0.1}s`;
        });
        
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            card.classList.add('reveal', 'animate');
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        window.addEventListener('scroll', revealElements);
        
        // Trigger on initial load
        revealElements();
    }, 100); // Small delay to ensure content is visible first
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// FAQ Accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const icon = otherItem.querySelector('.toggle-icon i');
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
            
            // Toggle icon
            const icon = item.querySelector('.toggle-icon i');
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
}

// Image Carousel
function initCarousel() {
    const images = document.querySelectorAll('.image-carousel img');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showImage(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        
        // Remove active class from all indicators
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // Show current image and set active indicator
        images[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    
    // Event listeners for controls
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });
    
    // Auto-rotate carousel every 5 seconds
    setInterval(nextImage, 5000);
}

// Language Demo Listen Buttons
function initListenButtons() {
    const listenButtons = document.querySelectorAll('.listen-btn');
    
    // Simulated audio files for the demo phrases
    const audioPhrases = {
        'Muraho': 'assets/audio/muraho.mp3',
        'Amakuru?': 'assets/audio/amakuru.mp3',
        'Murakoze': 'assets/audio/murakoze.mp3'
    };
    
    listenButtons.forEach(button => {
        button.addEventListener('click', function() {
            const phraseCard = this.closest('.phrase-card');
            const phrase = phraseCard.querySelector('.kinyarwanda-phrase').textContent;
            
            // For a real implementation, you would play the audio file here
            // For demo purposes, we'll just log it and show an animation
            console.log(`Playing audio for: ${phrase}`);
            
            // Add a visual indicator that the audio is playing
            this.innerHTML = '<i class="fas fa-volume-up fa-spin"></i> Playing...';
            
            // Reset button after 2 seconds (simulating audio play)
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-volume-up"></i> Listen';
            }, 2000);
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.querySelector('.mobile-menu-toggle').classList.remove('active');
            }
        }
    });
});

// Form submission
const emailForm = document.querySelector('.signup-form');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Simulate form submission
        console.log(`Email subscription: ${email}`);
        
        // Show success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you for subscribing!';
        successMessage.style.color = 'var(--secondary-color)';
        successMessage.style.marginTop = 'var(--spacing-sm)';
        
        // Reset form and append message
        this.reset();
        this.parentNode.appendChild(successMessage);
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// Progress bar animation on scroll
window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        
        if (barTop < window.innerHeight) {
            const width = bar.getAttribute('style').split('width:')[1].trim();
            
            // Reset the width to 0 and then animate to the target width
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease';
                bar.style.width = width;
            }, 100);
        }
    });
}, { once: true }); // Run only once to avoid continuous resets
// Wait for the DOM to be fully loaded before running script
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle the mobile menu when the hamburger icon is clicked
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close the mobile menu when a link is clicked
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            
            // Scroll smoothly to the target element
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll Animation for fade-in elements
    const fadeElems = document.querySelectorAll('.fadeIn');
    
    // Function to check if elements should be faded in based on scroll position
    function checkFade() {
        // Define trigger point (80% of viewport height)
        const triggerBottom = window.innerHeight * 0.8;
        
        fadeElems.forEach(elem => {
            // Get element's position relative to the viewport
            const elemTop = elem.getBoundingClientRect().top;
            
            // If element is in view, add 'active' class to fade it in
            if (elemTop < triggerBottom) {
                elem.classList.add('active');
            }
        });
    }
    
    // Run checkFade on page load
    window.addEventListener('load', checkFade);
    
    // Run checkFade every time the page is scrolled
    window.addEventListener('scroll', checkFade);
    
    // Header Scroll Effect - make header smaller on scroll
    const header = document.querySelector('header');
    let lastScrollY = 0;
    
    window.addEventListener('scroll', () => {
        // Get current scroll position
        const currentScrollY = window.scrollY;
        
        // Add or remove 'scrolled' class based on scroll position
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update last scroll position
        lastScrollY = currentScrollY;
    });
    
    // Initialize animations on load
    setTimeout(checkFade, 100);
    
    // Handle Contact Form Submission with Formspree
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Create form data
            const formData = new FormData(contactForm);
            
            // Replace with your Formspree endpoint
            fetch('https://formspree.io/f/xvgkbwnv', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                // Show success message
                showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                // Reset the form
                contactForm.reset();
            })
            .catch(error => {
                // Show error message
                showFormMessage('There was a problem sending your message. Please try again.', 'error');
                console.error('Error:', error);
            })
            .finally(() => {
                // Reset button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // Function to show form messages
    function showFormMessage(message, type) {
        // Check if message element already exists
        let messageElement = document.querySelector('.form-message');
        
        // If not, create a new one
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
        }
        
        // Set message content and style
        messageElement.textContent = message;
        messageElement.className = 'form-message ' + type;
        
        // Automatically hide message after 5 seconds
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.remove();
            }, 500);
        }, 5000);
    }
});
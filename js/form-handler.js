// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Check for status parameters in URL (for PHP method)
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');
        
        // Display messages based on status
        if (status === 'success') {
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
        } else if (status === 'error') {
            showFormMessage('There was a problem sending your message. Please try again.', 'error');
        }
        
        // For Formspree method, handle form submission
        contactForm.addEventListener('submit', function(e) {
            // If using Formspree (when no action attribute is set):
            if (!contactForm.getAttribute('action')) {
                e.preventDefault();
                
                // Create form data
                const formData = new FormData(contactForm);
                
                // Use fetch API to send the form to Formspree
                fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
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
                });
            }
            // If action is set (PHP method), let the form submit normally
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
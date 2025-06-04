
// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth Scrolling Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// FAQ Toggle Functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-icon');
            otherAnswer.classList.remove('active');
            otherIcon.textContent = '+';
        }
    });
    
    // Toggle current FAQ item
    answer.classList.toggle('active');
    icon.textContent = answer.classList.contains('active') ? '-' : '+';
}

// WhatsApp Contact Function
function openWhatsApp() {
    const phoneNumber = '260773813759';
    const message = 'Hello! I\'m interested in your waste management services. Could you please provide me with more information?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission and redirect to WhatsApp
    const whatsappMessage = `Hello! My name is ${name}. Email: ${email}. Message: ${message}`;
    const phoneNumber = '260773813759';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    alert(`Thank you, ${name}! Redirecting you to WhatsApp to complete your message.`);
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    event.target.reset();
}

// Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Pricing Plan Selection
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Get Started') || e.target.textContent.includes('Book Now')) {
            const card = e.target.closest('.pricing-card');
            const planName = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            
            const message = `Hello! I'm interested in the ${planName} at ${price}. Could you please provide me with more information and help me get started?`;
            const phoneNumber = '260773813759';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.pricing-card, .service-card, .stat, .faq-item, .value-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add click handlers for social links
document.addEventListener('DOMContentLoaded', () => {
    // Facebook link
    const facebookLinks = document.querySelectorAll('a[href*="facebook"]');
    facebookLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.facebook.com/share/18oHxHnmgU', '_blank');
        });
    });

    // Instagram link
    const instagramLinks = document.querySelectorAll('a[href*="instagram"]');
    instagramLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://instagram.com/clinzed_ltd', '_blank');
        });
    });

    // WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://wa.me/260773813759', '_blank');
        });
    });
});

// Console log for debugging
console.log('CLINZED website loaded successfully!');

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial body opacity for smooth page load
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Initialize any additional features here
    console.log('All CLINZED features initialized!');
});

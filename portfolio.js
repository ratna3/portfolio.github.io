// Portfolio JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to navigation items based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    // Update navigation on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call to set active nav item
    updateActiveNav();

    // Add fade-in animation for about section
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Skills animation
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Contact links hover effect
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Portfolio data (can be expanded for dynamic content)
const portfolioData = {
    personal: {
        name: "Ratna Kirti",
        title: "Computer Science Graduate & Full-Stack Developer",
        description: "Passionate about building innovative web applications with clean, efficient code",
        education: "Computer Science with Business Administration minor",
        skills: {
            programming: ["Java", "Python", "C++", "C", "C#"],
            web: ["React", "Node.js", "HTML5", "CSS3", "JavaScript"],
            specializations: ["Full-Stack Development", "Cloud-Native Applications", "Game Development", "Database Design"]
        },
        social: {
            github: "https://github.com/ratna3",
            linkedin: "https://www.linkedin.com/in/ratna-kirti"
        }
    }
};

// Function to get portfolio data
function getPortfolioData() {
    return portfolioData;
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioData, getPortfolioData };
}
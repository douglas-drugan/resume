// Smooth scrolling for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
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

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add typing effect to the title
const title = document.querySelector('.title');
const originalText = title.textContent;
title.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < originalText.length) {
        title.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add skill hover effects
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #2980b9, #3498db)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    });
});

// Print functionality
function printResume() {
    window.print();
}

// Add print button (optional)
const printButton = document.createElement('button');
printButton.innerHTML = '<i class="fas fa-print"></i> Print Resume';
printButton.className = 'print-btn';
printButton.onclick = printResume;

// Add print button styles
const printStyles = `
.print-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
}

.print-btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

@media print {
    .print-btn {
        display: none;
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);
document.body.appendChild(printButton);

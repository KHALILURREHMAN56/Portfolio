// Data for Projects
const projects = [
     {
        title: "Hospital Readmission Analysis",
        description: "Excel-based healthcare data analysis identifying factors influencing hospital readmissions using pivot tables, charts, KPIs, and an interactive dashboard.",
        tech: ["Excel", "Pivot Tables", "Power Query", "Dashboard", "KPI"],
        links: {
            github: "https://github.com/KHALILURREHMAN56/Hospital-readmission-analysis",
            demo: "#"
        },
        icon: "fa-notes-medical"
    },
        {
        title: "PakTrend Store Analysis",
        description: "End-to-end sales analytics project built in Excel, showcasing data cleaning, dashboard development, KPI tracking, and actionable business insights for PakTrend Store.",
        tech: ["Excel", "Power Query", "Pivot Tables", "Dashboard", "KPI"],
        links: {
            github: "https://github.com/KHALILURREHMAN56/PakTrend-Store-Analysis",
            demo: "#"
        },
        icon: "fa-shopping-cart"
    },
      {
        title: "Excel Visualization Project",
        description: "Built advanced Excel dashboards with dynamic charts and VBA automation for business reporting.",
        tech: ["Excel", "Power Query", "VBA"],
        links: {
            github: "https://github.com/KHALILURREHMAN56/Excel-visualization-Project",
            demo: "#"
        },
        icon: "fa-file-excel"
    },
    {
        title: "Ecommerce Sales Dashboard",
        description: "Interactive Power BI dashboard visualizing sales trends, customer segments, and KPI tracking for an ecommerce business.",
        tech: ["Power BI", "DAX", "Data Modeling"],
        links: {
            github: "https://github.com/KHALILURREHMAN56/SAAN-KHAN-ECOMMERCE-SALES-DASHBOARD",
            demo: "#"
        },
        icon: "fa-chart-line"
    },
    {
        title: "SQL Database Management System",
        description: "Designed and implemented a normalized SQL database schema for efficient data retrieval and reporting.",
        tech: ["SQL", "MySQL", "ETL"],
        links: {
            github: "https://github.com/KHALILURREHMAN56/SQL-Project",
            demo: "#"
        },
        icon: "fa-database"
    }
    
   
];

// Typewriter Effect
const typewriterText = ["Data Analyst.", "Power BI Developer.", "BI Storyteller."];
const typewriterElement = document.getElementById("typewriter");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentText = typewriterText[textIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterText.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Render Projects
function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="window.open('${project.links.github}', '_blank')">
            <div class="card-top">
                <div class="dot red"></div>
                <div class="dot yellow"></div>
                <div class="dot green"></div>
            </div>
            <div class="card-body">
                <i class="fas ${project.icon} project-icon"></i>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.links.github}" target="_blank" class="project-link" title="GitHub Code"><i class="fab fa-github"></i></a>
                    <a href="${project.links.demo}" class="project-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navMenu.classList.remove("open");
    });
});

// Custom Cursor (Optional but "Premium")
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Simple follow
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Trailing effect using simple animation api or just css transition
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.background = "rgba(10, 10, 10, 0.85)";
    }
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    renderProjects();
});

// Contact form setup
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showContactStatus(message, isError) {
    const status = document.getElementById('contact-status');
    if (!status) return;
    status.style.display = 'block';
    status.style.color = isError ? '#ff6b6b' : '#8bd18b';
    status.textContent = message;
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Initialize EmailJS if available (replace with your user ID)
    try {
        if (window.emailjs && typeof window.emailjs.init === 'function') {
            // NOTE: replace 'YOUR_EMAILJS_USER_ID' with your EmailJS user ID
            emailjs.init('YOUR_EMAILJS_USER_ID');
        }
    } catch (err) {
        // ignore init errors; we'll handle send errors below
        console.warn('EmailJS init error', err);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name')?.value.trim();
        const email = document.getElementById('contact-email')?.value.trim();
        const message = document.getElementById('contact-message')?.value.trim();

        if (!name || !email || !message) {
            showContactStatus('Please fill out all fields.', true);
            return;
        }

        if (!validateEmail(email)) {
            showContactStatus('Please enter a valid email address.', true);
            return;
        }

        // Prepare params for EmailJS
        const templateParams = {
            from_name: name,
            reply_to: email,
            message: message
        };

        // Replace the following placeholders with your EmailJS service/template IDs
        const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

        if (window.emailjs && typeof emailjs.send === 'function') {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                .then(function (response) {
                    showContactStatus('Message sent successfully. Thank you!', false);
                    form.reset();
                }, function (error) {
                    console.error('EmailJS send error:', error);
                    showContactStatus('Could not send message. Please try again later.', true);
                });
        } else {
            // EmailJS not loaded — fallback: instruct user to use mailto link
            showContactStatus('Mail service unavailable. Use the "Open Mail App" button.', true);
        }
    });
}

// Setup contact form after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});

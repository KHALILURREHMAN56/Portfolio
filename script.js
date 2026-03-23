// Data for Projects
const projects = [
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
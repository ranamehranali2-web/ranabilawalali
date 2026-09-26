
// ////////// web develpor///////////////////////////////

    
const roles = [
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "RESPONSIVE DEVELPOR",
    "LMS/POTFOLOI",
    "PROBLEM SOLVER"
];

const roleText = document.getElementById("roleText");

let roleIndex = 0;

function changeRole() {

    roleText.style.opacity = "0";

    setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleText.textContent = roles[roleIndex];
        roleText.style.opacity = "1";
    }, 300);
}

setInterval(changeRole, 2500);
// //////////////////////////////// five section  /////////////////////////
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill all fields.";
        formMessage.style.color = "#e53935";
        return;
    }

    // Email client open karega
    const myEmail = "mianhassan155156@gmail.com";

    const mailSubject = encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;

    formMessage.textContent = "Opening your email app...";
    formMessage.style.color = "#3949ab";
});
// /////////////////////

// ================= TESTIMONIAL SLIDER =================

const testimonialCards = document.querySelectorAll(
    ".testimonial-card"
);

const testimonialDots = document.querySelectorAll(
    ".testimonial-dot"
);

let testimonialIndex = 0;

let testimonialInterval;


// Show selected review

function showTestimonial(index) {

    testimonialCards.forEach((card, i) => {

        card.classList.toggle(
            "active",
            i === index
        );

    });


    testimonialDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


// Next review

function nextTestimonial() {

    testimonialIndex++;

    if (testimonialIndex >= testimonialCards.length) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}


// Start automatic slider

function startTestimonialSlider() {

    testimonialInterval = setInterval(
        nextTestimonial,
        5000
    );

}


// Reset automatic slider

function resetTestimonialSlider() {

    clearInterval(testimonialInterval);

    startTestimonialSlider();

}


// Click dots to change review

testimonialDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        testimonialIndex = index;

        showTestimonial(testimonialIndex);

        resetTestimonialSlider();

    });

});


// Initialize slider

if (testimonialCards.length > 0) {

    showTestimonial(0);

    startTestimonialSlider();

}
// ///////   nav bar /////////////////
// Scroll navbar
window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Mobile menu
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.innerHTML = "✕";
    } else {
        menuIcon.innerHTML = "☰";
    }

});


// Link click par menu close
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuIcon.innerHTML = "☰";

    });

});
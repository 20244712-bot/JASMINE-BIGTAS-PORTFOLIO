const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


let currentTheme = localStorage.getItem("theme") || "light";


function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");

    if (theme === "dark") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

    localStorage.setItem("theme", theme);
}


applyTheme(currentTheme);



themeToggle.addEventListener("click", () => {
    currentTheme = document.body.classList.contains("dark-mode")
        ? "light"
        : "dark";

    applyTheme(currentTheme);
});

        var links = document.querySelectorAll('.nav-link');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                for (var j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                }
                this.classList.add('active');
            });
        }

        
        
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");

    const isOpen = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isOpen);
});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    });
});
    
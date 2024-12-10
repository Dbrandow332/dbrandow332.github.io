// Add 'animate-fade-in' class when elements are in view
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fade-in");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

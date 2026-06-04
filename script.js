// Wait for page load
document.addEventListener("DOMContentLoaded", () => {

    // Create Back-To-Top Button
    const btn = document.createElement("button");
    btn.id = "topBtn";
    btn.innerHTML = "↑";
    document.body.appendChild(btn);

    // Show button when scrolling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    // Scroll to top
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            this.style.opacity = "0.7";

            setTimeout(() => {
                this.style.opacity = "1";
            }, 300);
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll(".center");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.6s ease";
        observer.observe(section);
    });
});
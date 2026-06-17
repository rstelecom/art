const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active");
});

// Smooth Scroll

document.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if(target.startsWith("#")){

            e.preventDefault();

            document.querySelector(target)
            .scrollIntoView({
                behavior:'smooth'
            });
        }

    });

});



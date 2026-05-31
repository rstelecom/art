```javascript
// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to ART Website");
});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Image click zoom effect
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
    });
});

// Highlight navigation link
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".nav a")
            .forEach(a => a.classList.remove("active"));

        link.classList.add("active");
    });
});
```

---

### Add these before `</body>`

```html
<button id="topBtn" onclick="scrollToTop()">↑</button>

<script src="./script.js"></script>
```

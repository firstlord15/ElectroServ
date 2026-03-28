// ── Burger menu ──
const burger = document.getElementById("burger");
const mobNav = document.getElementById("mobNav");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobNav.classList.toggle("open");
});

function closeNav() {
    burger.classList.remove("open");
    mobNav.classList.remove("open");
}

// ── FAQ accordion ──
document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
    });
});

// ── Scroll reveal ──
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add("visible"), i * 80);
            }
        });
    },
    { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

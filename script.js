// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-spy highlight on sidebar
const links = [...document.querySelectorAll(".navlink")];
const sections = links
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const obs = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const id = "#" + e.target.id;
    links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === id));
  }
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach(s => obs.observe(s));

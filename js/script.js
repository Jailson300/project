 // 1. Intersection Observer for Scroll Reveals
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Navbar Styling on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

function toggleReadMore() {
  const text = document.getElementById("text");
  const btn = document.getElementById("toggleBtn");

  text.classList.toggle("expanded");

  if (text.classList.contains("expanded")) {
      btn.innerHTML = "Read Less";
  } else {
      btn.innerHTML = "Read More";
  }
}

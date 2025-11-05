function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");
  const body = document.body;
  const header = document.querySelector(".site-header");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("no-scroll");
    header.classList.toggle("menu-open"); // activa el borde inferior
  });
}
function initScrollHeader() {
  let lastScroll = 0;
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });
}


window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollY = window.scrollY;
  hero.style.setProperty("--scroll", scrollY);
  const bg = hero.querySelector("::before"); // not accessible directly
  hero.style.setProperty("--bg-offset", scrollY * 0.3 + "px");
});





  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".animar").forEach(el => observer.observe(el));



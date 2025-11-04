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

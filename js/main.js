function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
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

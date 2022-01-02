const nav = document.querySelector("nav");
const header = document.querySelector("header");

const options = {
  rootMargin: "-12%",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("changeColor");
    } else {
      nav.classList.add("changeColor");
    }
  });
}, options);

observer.observe(header);

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navu = document.querySelector(".ull");
  const navLinks = document.querySelectorAll(".ull li");
  console.log(navLinks);
  // toggle nav
  burger.addEventListener("click", () => {
    navu.classList.toggle("nav-active");

    // animate nav
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};
navSlide();

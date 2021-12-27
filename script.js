const nav = document.querySelector("nav");
const content = document.querySelector(".content");

const options = {
  rootMargin: "-12px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove(changeColor);
    } else {
      nav.classList.add(changeColor);
    }
  });
}, options);

observer.observe(content);

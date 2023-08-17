document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation-list__link");

  function setActiveLink(link) {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    navLinks.forEach(function (link) {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (isInViewport(targetSection)) {
        setActiveLink(link);
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation-list__link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const offset = targetSection.offsetTop;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Modal functionality for PDF portfolio
  const modal = document.getElementById("portfolioModal");
  const openBtn = document.getElementById("openPortfolio");
  const closeBtn = document.querySelector(".close");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Hamburger menu toggle for responsive header
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-links"); // Fix: Target the correct element
  const ctaButton = document.querySelector(".cta-btn");
  const icon = menuToggle.querySelector("i");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      ctaButton.classList.toggle("active"); // Show/hide CTA button

      // Toggle between bars and X icon
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active");
      ctaButton.classList.remove("active");
      icon.classList.add("fa-bars");
      icon.classList.remove("fa-times");
    }
  });

  // Active navigation link based on scroll position
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", function () {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust for header height
      if (window.pageYOffset >= sectionTop) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (currentSectionId && link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  });

  // Smooth fade-in animation for sections when they enter the viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

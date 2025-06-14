document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const dropdownToggle = document.querySelector(".dropdown .menu-link");
  const dropdown = document.querySelector(".dropdown");

  // ✅ Toggle Mobile Menu
  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("bx-x");
    });
  }

  // ✅ Toggle Resources Dropdown
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", (e) => {
      e.preventDefault();
      dropdown.classList.toggle("active");
    });
  }

  // ✅ Smooth Scroll (skip dropdown toggle)
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      // Don't scroll if it's the dropdown opener
      if (link.classList.contains("menu-link")) return;

      if (targetEl) {
        e.preventDefault();
        window.scrollTo({
          top: targetEl.offsetTop - 70,
          behavior: "smooth"
        });

        // Close mobile nav on click
        navbar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
        dropdown.classList.remove("active");
      }
    });
  });

  // ✅ Hero Section Background Slider
  const hero = document.querySelector('.hero');
  const images = ['hope2\ \(1\).jpg', 'hope2\ \(2\).jpg', 'hope2\ \(3\).jpg']; // Replace with your image filenames
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }, 5000); // change every 5 seconds
});

// Modal JavaScript 

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("Learn More");
  const closeBtn = document.querySelector(".close-modal");
  const readMoreBtns = document.querySelectorAll(".btn.small");

  readMoreBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});


 document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
      const post = button.parentElement;
      const fullContent = post.querySelector('.full-content');
      const preview = post.querySelector('.preview');

      if (fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        preview.classList.add('hidden');
        button.textContent = 'Read Less';
      } else {
        fullContent.classList.add('hidden');
        preview.classList.remove('hidden');
        button.textContent = 'Read More';
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-up");

  const appear = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
        entry.target.classList.add("animated");
        appear.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => {
    appear.observe(el);
  });
});
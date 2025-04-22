document.addEventListener("DOMContentLoaded", () => {
    // Kitten widget interactivity
    const kitten = document.getElementById("kitten-widget");
  
    function triggerWave() {
      kitten.classList.add("animate-wave");
      setTimeout(() => {
        kitten.classList.remove("animate-wave");
      }, 1000);
    }
  
    // Trigger wave on mouse enter
    kitten.addEventListener("mouseenter", triggerWave);
  
    // Randomly trigger the wave at intervals
    setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 20000) + 10000;
      setTimeout(triggerWave, randomDelay);
    }, 15000);
  
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
      let scrollPos = window.pageYOffset;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  });
  
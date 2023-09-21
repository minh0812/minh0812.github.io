/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const btnSendMessage = document.getElementById("contact-button");

const sendEmail = (e) => {
  e.preventDefault();
  btnSendMessage.innerHTML = "<i class='ri-send-plane-line'></i> Sending...";
  btnSendMessage.disabled = true;
  // service id, template id, form, public key
  emailjs
    .sendForm(
      "service_jc9nd2h",
      "template_jiin5n5",
      contactForm,
      "bJGLfO20ad8dY_bas"
    )
    .then(
      (result) => {
        contactMessage.innerHTML = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.innerHTML = "";
        }, 5000);
        // reset form
        contactForm.reset();
        btnSendMessage.innerHTML =
          "<i class='ri-send-plane-line'></i> Send Message";
        btnSendMessage.disabled = false;
      },
      (error) => {
        contactMessage.innerHTML = "Message not sent (service error) ❌";
        setTimeout(() => {
          contactMessage.innerHTML = "";
        }, 5000);
        btnSendMessage.innerHTML =
          "<i class='ri-send-plane-line'></i> Send Message";
        btnSendMessage.disabled = false;
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
// get current theme of browser
const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeButton = document.getElementById("theme-button");

const darkTheme = () => {
  // Add or remove the dark / icon theme
  document.body.classList.add("dark-theme");
  themeButton.classList.add("ri-moon-line");
  themeButton.classList.remove("ri-sun-line");
};

const lightTheme = () => {
  // Add or remove the dark / icon theme
  document.body.classList.remove("dark-theme");
  themeButton.classList.remove("ri-moon-line");
  themeButton.classList.add("ri-sun-line");
};

isDarkTheme.matches ? darkTheme() : lightTheme();

// Detect the dark mode
isDarkTheme.addEventListener("change", () => {
  isDarkTheme.matches ? darkTheme() : lightTheme();
});

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("ri-moon-line");
  themeButton.classList.toggle("ri-sun-line");
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true, // to repeat animation
});

sr.reveal(
  ".home__perfil, .about__image, .contact__mail, #experience-box-right",
  { origin: "right" }
);
sr.reveal(
  ".home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data, #experience-box-left",
  { origin: "left" }
);
sr.reveal(".projects__card, .section__title-2", { interval: 100 });

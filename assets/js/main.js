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
const btnSend = document.getElementsByClassName("g-recaptcha")[0];

btnSend.setAttribute(
  "data-sitekey",
  "6LevFzYoAAAAAAULqxbRdA8rTmtz3PK5dOiGGLuB"
);

const sendEmail = (e) => {
  e.preventDefault();
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
        console.log(result);
        contactMessage.innerHTML = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.innerHTML = "";
        }, 5000);
        // reset form
        contactForm.reset();
      },
      (error) => {
        console.log(error);
        contactMessage.innerHTML = "Message not sent (service error) ❌";
        setTimeout(() => {
          contactMessage.innerHTML = "";
        }, 5000);
      }
    );
};

btnSend.setAttribute("data-callback", "sendEmail(event)");
/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

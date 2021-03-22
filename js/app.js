// regist var
gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll("section");
const titles = document.querySelectorAll(".title");
const preload = document.querySelector("#loading-page");

const sizeSplide = document.querySelector('#size-splide');
const footerSplide = document.querySelector('#footer-splide');
const blogSplide = document.querySelector('#blog-splide');


const dialogs = document.querySelectorAll('.dialog-overview');

const darkBtn = document.querySelector('#dark-btn');
const invertedEles = document.querySelectorAll('.inverted');
const navBackground = document.querySelector('#nav-background');


// add dialog for button( button must sit next to dialog on HTML order)
dialogs.forEach(dialog => {
  let openButton = dialog.nextElementSibling;
  let closeBtn = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeBtn.addEventListener('click', () => dialog.hide());
});

//loading page finish effect
window.addEventListener("load", () => {
  preload.classList.add("load-finish");
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  const navItems = document.querySelectorAll(".navbar-item");
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
        $target.classList.toggle("show-menu");
      });
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // close menu
          el.classList.remove("is-active");
          $target.classList.remove("is-active");
          $target.classList.remove("show-menu");
        });
      });
    });
  }

  //toggle/switch dark mode
  darkBtn.addEventListener('sl-change',() =>{
    document.documentElement.classList.toggle('dark-mode');

    invertedEles.forEach(ele => {
        ele.classList.toggle('invert');
    });

    if(navBackground.classList.contains('invert')){
      console.log('go dark');
      navBackground.style.backgroundImage= "url(./photos/section2-dark.jpg)";
    }else{
      console.log('go bright');
      navBackground.style.backgroundImage= "url(./photos/section2.jpg)";
    }
  });
});

// Splide
new Splide(sizeSplide, {
  rewind: true,
  perPage: 3,
  height: "30%",
  cover: true,
  breakpoins: {
    640: {
      height: "6rem",
    },
  },
}).mount();

new Splide(footerSplide, {
  type: "loop",
  fixedWidth: 150,
  height: 150,
  gap: 20,
  rewind: true,
  cover: true,
  pagination: false,
  lazyload: "nearby",
}).mount();

new Splide(blogSplide, {
  rewind: true,
  perPage: 1,
  height: "40%",
  cover: true,
}).mount();

// scroll effect
// fading in/out for each section
sections.forEach((section) => {
  gsap.to(section, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: section,
      start: "bottom bottom-=300",
      scrub: true
    },
  });
});

titles.forEach((title) => {
  gsap.from(title, {
    x: 100,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: title,
      start: "top center-=100",
      end: "+=200",
      scrub: true
    },
  });
});

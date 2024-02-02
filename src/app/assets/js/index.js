const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // Use querySelectorAll
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => {
                opt.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


//  ======================== top Button js  ===========================

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===================================== Header Transparent Controlled ================================
const headerEl = document.querySelectorAll('.header, .nav__link, .logo-light, .logo-dark');
const logoLight = document.querySelector('.logo-light');
const logoDark = document.querySelector('.logo-dark');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.forEach(element => {
            element.classList.add('header-scrolled');
            element.classList.add('nav__link2');
            element.classList.add('logo-dark');
            element.classList.remove('logo-light');
        });
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
    } else {
        headerEl.forEach(element => {
            element.classList.remove('header-scrolled');
            element.classList.remove('nav__link2');
            element.classList.remove('logo-dark');
            element.classList.add('logo-light');
        });
        logoDark.style.display = 'none';
        logoLight.style.display = 'block';
    }
});

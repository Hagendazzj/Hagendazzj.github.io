
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
burger.addEventListener('click', () => {
      //Toggle nav 
      nav.classList.toggle('nav-active'); 

         //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
      
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
  
}

  navSlide ();  


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("nav").style.background = "#FCFCFC";
    } else {
      document.getElementById("nav").style.background = "transparent";
    }
  }
  
  var rellax = new Rellax('.rellax');



  

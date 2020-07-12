
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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
      document.getElementById("nav").style.background = "#FCFCFC";
    } else {
      document.getElementById("nav").style.background = "transparent";
    }
  }

  var rellax = new Rellax('.rellax');


  var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'jibble'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#38ABA3',
                '#AB5F38',
                '#D1E8E7',
                '#0C5E59',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: .5
            
        }]
    },
    options: {
        
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'jibble'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#38ABA3',
                '#AB5F38',
                '#D1E8E7',
                '#0C5E59',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: .5
            
        }]
    },
    options: {
        
    }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'jibble'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#38ABA3',
                '#AB5F38',
                '#D1E8E7',
                '#0C5E59',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: .5
            
        }]
    },
    options: {
        
    }
});

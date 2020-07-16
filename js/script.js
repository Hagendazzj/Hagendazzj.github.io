
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




  var rellax = new Rellax('.rellax');


  var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Less confusion working with others', 'Save time', 'less stress with being organized', 'Access from multiple devices'],
        datasets: [{
            label: '# of Votes',
            data: [20, 35, 40, 5],
            backgroundColor: [
                '#38ABA3',
                '#0C5E59',
                '#D1E8E7',
                '#AB5F38',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: 0
            
        }]
    },
    options: {
      responsive: false
        
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['How it can be organized', 'How it looks', 'The networking capabilities', 'How it connects to what I use'],
        datasets: [{
            label: '# of Votes',
            data: [40, 10, 10, 35],
            backgroundColor: [
                '#38ABA3',
                '#AB5F38',
                '#D1E8E7',
                '#0C5E59',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: 0
            
        }]
    },
    options: {
      responsive: false
    }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Easy to keep organized', 'Networking and sharing', 'I find new ideas', ' Easy to save backups'],
        datasets: [{
            label: '# of Votes',
            data: [60, 25, 5, 5],
            backgroundColor: [
                '#38ABA3',
                '#AB5F38',
                '#D1E8E7',
                '#0C5E59',
                '#F7996A',
                'rgba(255, 159, 64, 0.2)'
            ],
        
            borderWidth: 0
            
        }]
    },
    options: {
      
      responsive: false

       
    }
  
});

Chart.defaults.global.defaultFontColor = '#fcfcfc';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontFmaily = 'Roboto';


let chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
            layout: {
                legend: false
            }
        }
    });

 

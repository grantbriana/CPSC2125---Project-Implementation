
 function colorChange() {
  var main1Box = document.getElementById('main1');
  //main1Box.style.color = 'black';
  main1Box.style.color = 'white';
  //main1Box.style.backgroundColor = '#F3DAD8';
   main1Box.style.backgroundColor = '#79A9D1';


  var main2Box = document.getElementById('main2');
  //main2Box.style.color = 'black';
  main2Box.style.color = 'white';
  //main2Box.style.backgroundColor = '#F4C3C2';
  main2Box.style.backgroundColor = "#36311F";



  var footerBox = document.getElementById('footer');
  footerBox.style.color = 'black';
  footerBox.style.backgroundColor = '#D6D9CE';

  var headerBox = document.getElementById('header');
  //headerBox.style.backgroundColor = '#F1B5CB';
   headerBox.style.backgroundColor = '#0C0C0C';

}

function chartOnLoad(){
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
      
    type: 'bar',
    data: {
      labels: ["2022","2024","2026","2028","2030"],
      datasets: [{
        label: '# of Active Software Developers (million)',
        data: [28, 33, 37,41,45],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

window.onload = chartOnLoad()
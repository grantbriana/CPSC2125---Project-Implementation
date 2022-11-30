
 function colorChange() {
  var main1Box = document.getElementById('main1');
  main1Box.style.color = 'black';
  main1Box.style.backgroundColor = '#e8e8e8';

  var main2Box = document.getElementById('main2');
  main2Box.style.color = 'black';
  main2Box.style.backgroundColor = "#white";

  var footerBox = document.getElementById('footer');
  footerBox.style.color = 'white';
  footerBox.style.backgroundColor = 'black';

  var headerBox = document.getElementById('header');
  headerBox.style.backgroundColor = '#0C0C0C';

  var navBar = document.getElementById('navBar');
  navBar.style.backgroundColor = '#8c8c8c';
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

function quiz(){

  var correctAnswer1 = document.getElementById("True");
  var answer1 = "Incorrect. The correct answer was: True";
  if(correctAnswer1.checked){
    answer1 = "Correct!";
  }

  var correctAnswer2 = document.getElementById("javascript");
  var answer2 = "Incorrect. The correct answer was: Javascript";
  if(correctAnswer2.checked){
    answer2 = "Correct!";
  }
          
  var correctAnswer3 = document.getElementById("69%");
  var answer3 = "Incorrect. The correct answer was: Javascript";
  if (correctAnswer3.checked) {
    answer3 = "Correct!";
  }
  
  document.getElementById("result1").innerHTML = answer1;
  document.getElementById("result2").innerHTML = answer2;
  document.getElementById("result3").innerHTML = answer3;
}

window.onload = chartOnLoad();
window.onload = quiz();
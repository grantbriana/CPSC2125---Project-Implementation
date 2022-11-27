
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
  const btn = document.querySelector('#submit');
const output = document.querySelector('#result');

const radioButtons2 = document.querySelectorAll('input[name="pop_language"]');

const radioButtons1 = document.querySelectorAll('input[name="prog_women"]');

const radioButtons3 = document.querySelectorAll('input[name="self_taught"]');
  


btn.addEventListener("click", () => {
            let answer2;
            for (const radioButton of radioButtons2) {
                if (radioButton.checked.value == "Javascript") {
                    answer2 = "Correct!";
                    break;
                }
              else{
                answer2 = "Incorrect. The correct answer was: Javascript "
              }

              
              let answer1;
              for (const radioButton of radioButtons1) {
                if (radioButton.checked.value == "True") {
                    answer1 = "Correct!";
                    break;
                }
              else{
                answer1 = "Incorrect. The correct answer was: True"
              }

                
                let answer3;
                for (const radioButton of radioButtons3) {
                if (radioButton.checked.value == "69%") {
                    answer3 = "Correct!";
                    break;
                }
              else{
                answer3 = "Incorrect. The correct answer was: 69%"
            }
              }
  }
            

}

window.onload = chartOnLoad()
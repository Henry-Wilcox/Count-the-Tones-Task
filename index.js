
let counterDisplayElem = document.querySelector('.counter-display')
let counterPlusElem = document.querySelector('.counter-plus');
let count = 0
let started = false
var x = document.getElementById("myAudio");
let pauseButton = document.querySelector(".stopping-text")
let startingText = document.querySelector(".starting-text")
pauseButton.classList.add('gone');
// Functionality of Buttons

function playAudio() { 
    x.play(); 
    startingText.classList.add('gone');
    pauseButton.classList.remove('gone');
    if (started == false) {
      count = 0;
      updateDisplay();
      started = true;
    }
  } 
  
  function pauseAudio() { 
    x.pause(); 
    pauseButton.classList.add('gone');
    startingText.classList.remove('gone');
  } 

function updateDisplay(){
    counterDisplayElem.innerHTML = count;};


counterPlusElem.addEventListener("click",()=>{count++; updateDisplay();});



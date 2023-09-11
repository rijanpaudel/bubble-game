var timer = 60;
var score = 0;
var randomHitNumber = 0;

function hitNumber(){
  randomHitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitnumber").textContent = randomHitNumber;
}

function makeBubble(){
  var bubbleAdder = "";
for(i = 1; i <= 144; i++){
  var randomNumberBubbles = Math.floor(Math.random() * 10);
  bubbleAdder += `<div class="bubble">${randomNumberBubbles}</div>`;
}

document.querySelector("#bubble-panel").innerHTML = bubbleAdder;
}


function timeRunner(){
  var time = setInterval(function(){
    if (timer > 0){
      timer--;
      document.querySelector("#timer").textContent = timer;
    }
    else{
      clearInterval(time);
      document.querySelector("#bubble-panel").innerHTML = `<h1>Game Over!</h1><br><h1>Your Score Is ${score}.</h1>`;


    }

  },1000);
}

function scoreCounter(){
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#bubble-panel").addEventListener("click",function(a){
  var clickedNumber = Number(a.target.textContent);
  if(clickedNumber === randomHitNumber){
    scoreCounter();
    makeBubble();
    hitNumber();
  }
});

timeRunner();
makeBubble();
hitNumber();







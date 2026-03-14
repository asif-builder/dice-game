// function rollDice() {
   
//     var randomNumber1 = Math.floor(Math.random() * 6 + 1);

//     var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
//     document.querySelector(".img1").setAttribute("src", randomDiceImage1);

//     var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//     var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
//     document.querySelector(".img2").setAttribute("src", randomDiceImage2);

//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
//     } else if (randomNumber1 < randomNumber2) {
//         document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//     } else {
//         document.querySelector("h1").innerHTML = "😅 It's a Draw!";
//     }

//     var dice1 = document.querySelector(".img1");
//     var dice2 = document.querySelector(".img2");

//     dice1.classList.add("roll");
//     dice2.classList.add("roll");

var score1 = 0;
var score2 = 0;

function rollDice(){

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").src="images/dice"+randomNumber1+".png";
document.querySelector(".img2").src="images/dice"+randomNumber2+".png";

var dice1=document.querySelector(".img1");
var dice2=document.querySelector(".img2");

dice1.classList.add("roll");
dice2.classList.add("roll");

setTimeout(function(){
dice1.classList.remove("roll");
dice2.classList.remove("roll");
},400);

if(randomNumber1>randomNumber2){

document.querySelector("#game-title").innerHTML="🚩 Player 1 Wins!";
score1++;

}

else if(randomNumber2>randomNumber1){

document.querySelector("#game-title").innerHTML="Player 2 Wins! 🚩";
score2++;

}

else{

document.querySelector("#game-title").innerHTML="😅 Draw!";

}

document.getElementById("score1").innerText=score1;
document.getElementById("score2").innerText=score2;

}

//     setTimeout(function () {
//         dice1.classList.remove("roll");
//         dice2.classList.remove("roll");
//     }, 600);

// }

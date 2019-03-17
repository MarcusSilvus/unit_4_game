


//linking above varibles to DOM
var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var userCount = document.getElementById("playerScore");
computerNumber = document.getElementById("randomScore");


//score keeping varibles and number varibles
var wins = 0;
var losses = 0;
var userScore = 0;
//generate a random number from 19 - 120
var randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber);


//genrate a random number for cyrstals from 1 - 12
var crystalNumber = Math.floor(Math.random() * 12);
console.log(crystalNumber);





winCount.textContent = wins;
lossCount.textContent = losses;
computerNumber.textContent = randomNumber;
userCount.textContent = userScore;
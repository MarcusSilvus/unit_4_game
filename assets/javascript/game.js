


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
var randomNumber = Math.floor(Math.random() * 102) + 19;
console.log(randomNumber);


winCount.textContent = wins;
lossCount.textContent = losses;
computerNumber.textContent = randomNumber;
userCount.textContent = userScore;


$(document).ready(() => {

    //Give each crystal a random number
    $('.img').each(function () {
        //genrate a random number for cyrstals from 1 - 12
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        console.log(crystalNumber);
        $(this).attr('data-crystalNumber', crystalNumber);
    });
    
    //When a crystal is clicked, the number is added to playerScore
    $('.img').on('click', function() {
        // console.log($(this).attr('data-crystalNumber'));
        var num = parseInt($(this).attr('data-crystalNumber'));
        userScore += num;
        console.log(userScore);
        $('#playerScore').text(userScore);
        
       //If playerScore matches randomNumber, player is alerted of win and winCount goes up
        if (userScore === randomNumber) {
            wins ++;
            alert("You Win!"); 
        //If playerScore exceeds randonNumber, player is alerted of loss and lossCount goes up
        } else if (userScore > randomNumber) {
            losses ++;
            alert("You Lose!"); 
        }

    });

    //Game resets

});
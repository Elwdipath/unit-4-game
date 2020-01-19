/* crystal game */
$(document).ready(function() {
/* create variables for wins, losses, current score, number to reach, values for each crystal,*/
var crystal = {
	wins: 0,
	losses: 0,
	currentScore: 0,
    scoreToReach:[],
    crystalValues: [],/* try to make this an array where the crystalValues loop fills in*/
}


/* create a function to create a random number for the user to reach */
// function randomScore() {
    
// }

function gameStart(){
    // Set score to 0 to start the game
    crystal.currentScore = 0;
    crystal.crystalValues = [];
    // Create a random number for the user to get to and set to scoreToReach
    crystal.scoreToReach = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    
    for ( var i = 0; i < 4; i++) {
        let num = [Math.floor(Math.random() * 12) + 1];
        crystal.crystalValues.push(num)
     }
    
    //Set dom for scoreToReach and currentSore
    document.getElementById("scoreToReach").innerText = `Score to Reach: ${crystal.scoreToReach}`
    document.getElementById("currentScore").innerText = `Current Score: ${crystal.currentScore}`

    //create a for loop that will create for random numbers and place in the crystal.crystalValues array
    
}
/* create a conditional for what happens when the user matches the score(win)or goes over (loss)*/
function gameEnd() {

    if (crystal.currentScore === crystal.scoreToReach){

        alert("Winner Winner Chicken Dinner");
        crystal.wins++;
        document.getElementById("wins").innerText =`Wins: ${crystal.wins}`;
        gameStart();
        
    } else if (crystal.currentScore > crystal.scoreToReach) {


        alert("You lose");
        crystal.losses++;
        document.getElementById("losses").innerText =`Losses: ${crystal.losses}`;
        $("#scoreToReach").empty();
        gameStart();

    }
}




gameStart()


    // randomScore()
    


/* create a for loop to assign a numerical value for each crystal */
    // for ( var i = 0; i < 4; i++) {
    //     let num = [Math.floor(Math.random() * 12) + 1];
    //     crystal.crystalValues.push(num)
        
     
/* create an on click function that takes the value of the crystal clicked and add it to current score */
     $("#redcrystal").on("click", function (){
         crystal.currentScore = parseInt(crystal.crystalValues[0]) + parseInt(crystal.currentScore);
         gameEnd()
         document.getElementById("currentScore").innerText = `Current Score: ${crystal.currentScore}`;
     })

     $("#bluecrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[1]) + parseInt(crystal.currentScore);
        gameEnd()
        document.getElementById("currentScore").innerText = `Current Score: ${crystal.currentScore}`;
    })

    $("#greencrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[2]) + parseInt(crystal.currentScore);
        gameEnd()
        document.getElementById("currentScore").innerText = `Current Score: ${crystal.currentScore}`;
    })

    $("#yellowcrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[3]) + parseInt(crystal.currentScore);
        gameEnd()
        document.getElementById("currentScore").innerText = `Current Score: ${crystal.currentScore}`;
    })
    // gameStart()
});

/* reset game */
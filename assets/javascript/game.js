/* crystal game */

/* create variables for wins, losses, current score, number to reach, values for each crystal,*/
var crystal = {
	wins: 0,
	losses: 0,
	currentScore: 0,
    scoreToReach:[],
    crystalValues: [],/* try to make this an array where the crystal function fills in*/
}


/* create a function to create a random number for the user to reach */
function randomScore() {
    crystal.scoreToReach = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

randomScore()


/* create a function to assign a numerical value for each crystal */
    for ( var i = 0; i < 4; i++) {
        let num = [Math.floor(Math.random() * 12) + 1];
        crystal.crystalValues.push(num)
        
     }
console.log(crystal.crystalValues)

/* create an on click function that takes the value of the crystal clicked and add it to current score */
     $("#redcrystal").on("click", function (){
         crystal.currentScore = parseInt(crystal.crystalValues[0]) + parseInt(crystal.currentScore);
         console.log(crystal.currentScore)
     })

     $("#bluecrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[1]) + parseInt(crystal.currentScore);
        console.log(crystal.currentScore)
    })

    $("#greencrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[2]) + parseInt(crystal.currentScore);
        console.log(crystal.currentScore)
    })

    $("#yellowcrystal").on("click", function (){
        crystal.currentScore = parseInt(crystal.crystalValues[3]) + parseInt(crystal.currentScore);
        console.log(crystal.currentScore)
    })

/* create a conditional for what happens when the user matches the score(win)or goes over (loss)*/
/* reset game */
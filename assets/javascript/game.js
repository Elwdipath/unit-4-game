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

// assign values to crystals from crystal value array
     $("#redcrystal").val(crystal.crystalValues[0])
     $("#bluecrystal").val(crystal.crystalValues[1])
     $("#yellowcrystal").val(crystal.crystalValues[2])
     $("#greencrystal").val(crystal.crystalValues[3])

    
/* create an on click function that takes the value of the crystal clicked and add it to current score */
/* create a conditional for what happens when the user matches the score(win)or goes over (loss)*/
/* reset game */
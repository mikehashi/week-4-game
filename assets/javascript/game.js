// variables

$(document).ready(function() {

	var targetNumber = Math.floor(Math.random()* (120) + 1);

	$("#number-to-guess").text(targetNumber);

	var counter = 0;

	var arr = [];
	var winnings = 0;
	var losings = 0;

	var crystalBlue = $("#crystalBlue");
	var crystalRed = $("#crystalRed");
	var crystalGreen = $("#crystalGreen");
	var crystalYellow = $("#crystalYellow");

	randomArray();

	function randomArray () {
		while(arr.length < 4){
	    	var randomnumber = Math.ceil(Math.random()*12)
	    	
	    	if(arr.indexOf(randomnumber) > -1) continue;
	    	
	    	arr[arr.length] = randomnumber;
		}

		crystalBlue.attr("data-crystalvalue", arr[0]);
		crystalRed.attr("data-crystalvalue", arr[1]);
		crystalGreen.attr("data-crystalvalue", arr[2]);
		crystalYellow.attr("data-crystalvalue", arr[3]);

		
	};

	function resetGame() {
		arr = [];
		counter = 0;
		targetNumber = Math.floor(Math.random()* (120) + 1);
		$("#number-to-guess").text(targetNumber);
		$("#totalScore").html(counter);
		randomArray();	
	}

	$(".imageCrystal").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	$("#totalScore").html(counter);
    	// alert("New score: " + counter);

	    if (counter === targetNumber) {
	      alert("You win!");
	      winnings++;
	      $("#winner").html(winnings);
	      resetGame();
	    }

	    else if (counter >= targetNumber) {
	      alert("You lose!!");
	      losings++;
	      $("#loser").html(losings);
		  resetGame();
	    }
	});





	 



	

});

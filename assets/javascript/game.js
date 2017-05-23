// variables

$(document).ready(function() {

	var targetNumber = Math.floor(Math.random()* (120) + 1);

	$("#number-to-guess").text(targetNumber);

	var counter = 0;

	var arr = []

	while(arr.length < 4){
    	var randomnumber = Math.ceil(Math.random()*12)
    	
    	if(arr.indexOf(randomnumber) > -1) continue;
    	
    	arr[arr.length] = randomnumber;
	}

	for (var i = 0; i < arr.length; i++) {
		$(".imageCrystal").attr("data-crystalvalue", arr[i]);
	
	}

	$(".imageCrystal").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	 alert("New score: " + counter);

	    if (counter === targetNumber) {
	      alert("You win!");
	      //reset Game
	    }

	    else if (counter >= targetNumber) {
	      alert("You lose!!");

	      //reset Game
	    }
	});

	

	console.log(arr);





	 



	

});

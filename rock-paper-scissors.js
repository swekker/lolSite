/*1=rock, 2=paper, 3=scissors/4=lizard,5=spock*/
var x;
var y;
var pcChoice = function(){
	var computerChoice = Math.random();
	if (computerChoice < 0.33334) {
		computerChoice = 1;
	} else if(computerChoice <= 0.66667) {
		computerChoice = 2;
	} else {
		computerChoice = 3;
	}
	if(computerChoice===1){
		alert("Computer: rock");
	}else if(computerChoice===2){
		alert("Computer: paper");
	}else{
		alert("Computer: scissors");
	};
	x=computerChoice;
}

var pcChoice2 = function(){
	var computerChoice = Math.random();
	if (computerChoice <= 0.2) {
		computerChoice = 1;
	} else if(computerChoice <= 0.4) {
		computerChoice = 2;
	} else if(computerChoice <= 0.6) {
		computerChoice = 3;
	} else if(computerChoice <= 0.8) {
		computerChoice = 4;
	} else {
		computerChoice = 5;
	}
		
	if(computerChoice===1){
		alert("Computer: rock");
	}else if(computerChoice===2){
		alert("Computer: paper");
	}else if(computerChoice===3){
		alert("Computer: scissors");
	}else if(computerChoice===4){
		alert("Computer: lizard");
	}else{
		alert("Computer: spock");
	};
 y=computerChoice;
}

var userScore=0, computerScore=0;
var compare = function(choice1,choice2){
	if(choice1===choice2){
		alert("draw");
        return;
    }else if(choice1===1){
        if(choice2===3){ 
			userScore++;
			alert("you won");
            return;
        }else{
			computerScore++;
			alert("you lost");
            return;
        }
    }else if(choice1===3){
        if(choice2===1){ 
			computerScore++;
            alert("you lost");
            return;
        }else{
			userScore++;
            alert("you won");
            return;
        }
    }else{
        if(choice2===1){ 
			userScore++;
            alert("you won");
            return;
        }else{
			computerScore++;
            alert("you lost");
            return;
        }
    }
}

var compare2 = function(choice1,choice2){
	if(choice1===choice2){
		alert("draw");
        return;
    }else if(choice1===1){
        if(choice2===3||choice2===4){ 
			userScore++;
			alert("you won");
            return;
        }else{
			computerScore++;
			alert("you lost");
            return;
        }
    }else if(choice1===3){
        if(choice2===1||choice2===5){ 
			computerScore++;
            alert("you lost");
            return;
        }else{
			userScore++;
            alert("you won");
            return;
        }
    }else if(choice1===2){
        if(choice2===1||choice2===5){ 
			userScore++;
            alert("you won");
            return;
        }else{
			computerScore++;
            alert("you lost");
            return;
        }
    }else if(choice1===4){
        if(choice2===5||choice2===2){ 
			userScore++;
            alert("you won");
            return;
        }else{
			computerScore++;
            alert("you lost");
            return;
        }
    }else{
        if(choice2===1||choice2===3){ 
			userScore++;
            alert("you won");
            return;
        }else{
			computerScore++;
            alert("you lost");
            return;
        }
    }
}

var update = function(){
	document.getElementById("button2").innerHTML = "you " + userScore + "-" + computerScore + " computer";
}



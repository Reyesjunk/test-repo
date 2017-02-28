//Jedi Name

function jediName(firstName, lastName){
	let	name1 =  firstName.slice(0,2);
	let name2 = lastName.slice(0, 3);
	console.log(name2+name1);
}
jediName('Beyonce', 'Knowles');

//To Infinity...
function beyond(num) {
    // num !== Infinity && num !== -Infinity
    function isInfinity(num) {
    	return num === Infinity || num === -Infinity
    }

	if (isInfinity(num)) {
		console.log("And beyond");
	}
	// else if (num !== Infinity && num !== -Infinity && num > 0) {
	else if (!isInfinity(num) && num > 0) {
		console.log("To infinity");
	}
	else if (!isInfinity(num) && num < 0) {
		console.log("To negative infinity");
	}
	else if (num === 0) {
		console.log("Staying home")
	}
	else {}

	// return undefined
}

//Cracking the code
function code(word){
	switch (word[0]) {
		case 'a': 
			return word[1];
			break;
		case 'b':
			 return word[2];
			break;
		case 'c':
			return word[3];
			break;
		case 'd':
			return word[4];
			break;
		default:
			return " ";
			break;
	}
}
function crackCode() {
	console.log(code('craft') + code('block') + code('argon') + code('meter')+ code('bells')+code('brown')+
	code('croon') + code('droop'));
}
crackCode();

//How many days in a month

function monthDays(month) {
	let daysInMonth = 31;

	switch (month) {
		case "January":
		// return `${month} has ___ days`
			daysInMonth = 31;
			break;
		case "February":
			return 'February has 28 or 29 days';
			break;
		case "March": 
			return 'March has 31 days';
			break;
		case "April":
			return 'April has 30 days';
			break;
		case "May":
			return 'May has 31 days';
			break;
		case "June":
			return 'June has 30 days';
			break;
		case "July":
			return 'July has 31 days';
			break;
		case "August":
			return 'August has 31 days';
			break;
		case "September":
			return 'September has 30 days';
			break;
		case "October":
			return 'October has 31 days';
			break;
		case "November":
			return 'November has 30 days';
			break;
		case "December":
			return 'December has 31 days';
			break;
		default:
			break;
	}

	return `${month} has ${daysInMonth} days`;

}

//Rock Paper Scissors

function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
    const rock = 1;
    const paper = 2;
    const scissor = 3;
    const compWin = "Computer wins";
    const userWin = "User wins";
    const tie = "It's a tie";

    if(userChoice === 1) {
    	if (computer === 2){
    		console.log(`Computer wins`);
    	}
    	else if (computer === 3) {
    		console.log(`User Wins`);
    	}
    	else {
    		console.log(`It's a tie`);
    	}
    }

     if(userChoice === 2) {
    	if (computer === 3){
    		console.log(`Computer wins`);
    	}
    	else if (computer === 1) {
    		console.log(`User Wins`);
    	}
    	else {
    		console.log(`It's a tie`);
    	}
    }

    if(userChoice === 3) {
    	if (computer === 1){
    		console.log(`Computer wins`);
    	}
    	else if (computer === 2) {
    		console.log(`User Wins`);
    	}
    	else {
    		console.log(`It's a tie`);
    	}
 
    }


}

RockPaperScissors(2);

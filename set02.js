//Jedi Name

function jediName(firstName, lastName){
	let	name1 =  firstName.slice(0,2);
	let name2 = lastName.slice(0, 3);
	console.log(name2+name1);
}
jediName('Beyonce', 'Knowles');

//To Infinity...
function beyond(num) {
	if (num === Infinity || num === -Infinity) {
		console.log("And beyond");
	}
	else if (num !== Infinity && num !== -Infinity && num > 0) {
		console.log("To infinity");
	}
	else if (num !== Infinity && num !== -Infinity && num < 0) {
		console.log("To negative infinity");
	}
	else if (num === 0) {
		console.log("Staying home")
	}
	else {}
}
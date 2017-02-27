function whoAmI (name, age) {
	if(name === undefined || typeof name !== "string" || age === undefined || age !== "number") {
		console.error("Argument not valid");
	}
	else{
		let yob=yearOfBirth(age);
		console.log(`Hi, my name is ${name} and I am ${yob} years old`);
	}
}

function yearOfBirth(age) {
	let yearOfBirth = 2017 - age;
	try {
		if (age < 0) {
		throw new Error("Age cannot be negative");
		}
		else {
			console.log(`I was born in ${yearOfBirth}`);
		}
	}
	catch (e) {
		console.log(e.message);
	}
}

whoAmI();
function whoAmI (name, age) {
	var yob=yearOfBirth(age);
	console.log(`Hi, my name is ${name} and I am ${yob} years old`);
}

function yearOfBirth(age) {
	var yearOfBirth = 2017 - age;
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
(function() {

	var app = angular.module('fizzbuzz', []);

	

	app.controller('FizzBuzzController', function() {
		this.numbersArray = [];

		for (var i = 1; i <= 100; i++) {
			if (i%3 == 0 && i%5 == 0 && i!==0) {
				this.numbersArray[i-1] = 'fizzbuzz';
			} else if (i%3 == 0) {
				this.numbersArray[i-1] = 'fizz';
			} else if (i%5 == 0) {
				this.numbersArray[i-1] = 'buzz';
			} else {
				this.numbersArray[i-1] = i;
			}
		}
	});



})();
 var div1 = document.getElementById("div1");
 var fizzbuzz;
 var wrapper;
 var text;

 for (var i = 1; i <= 100; i++) {
	if (i%3 == 0 && i%5 == 0 && i!==0) {
		fizzbuzz = document.createElement('div');
		fizzbuzz.className = "fizzbuzz";
		wrapper = document.createElement('div');
		wrapper.className = "wrapper";
		text = document.createTextNode('fizzbuzz');
		wrapper.appendChild(text);
		fizzbuzz.appendChild(wrapper);
		div1.appendChild(fizzbuzz);
	} else if (i%5 == 0) {
		fizzbuzz = document.createElement('div');
		fizzbuzz.className = "buzz";
		wrapper = document.createElement('div');
		wrapper.className = "wrapper";
		text = document.createTextNode('buzz');
		wrapper.appendChild(text);
		fizzbuzz.appendChild(wrapper);
		div1.appendChild(fizzbuzz);
	} else if (i%3 == 0) {
		fizzbuzz = document.createElement('div');
		fizzbuzz.className = "fizz";
		wrapper = document.createElement('div');
		wrapper.className = "wrapper";
		text = document.createTextNode('fizz');
		wrapper.appendChild(text);
		fizzbuzz.appendChild(wrapper);
		div1.appendChild(fizzbuzz);
	} else {
		fizzbuzz = document.createElement('div');
		fizzbuzz.className = "number";
		wrapper = document.createElement('div');
		wrapper.className = "wrapper";
		text = document.createTextNode(i);
		wrapper.appendChild(text);
		fizzbuzz.appendChild(wrapper);
		div1.appendChild(fizzbuzz);
	}
};




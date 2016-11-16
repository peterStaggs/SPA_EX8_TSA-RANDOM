let anywhere = document.getElementById("anywhere");
//Use Math.random to output either a left or right arrow while clicking anywhere
document.body.addEventListener('click', function random() {
	let output = document.getElementById('output');
	let decider = Math.floor((Math.random() * 10)+ 1);
		if (decider < 5) {
			output.innerHTML = `<img src=" http://barringtonstudiosltd.com/images/left-arrow2.png">`
		}
		else 
			output.innerHTML = `<img src="http://www.clipartbest.com/cliparts/4Tb/4zA/4Tb4zAaTg.png">`
});
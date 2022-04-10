var _eggs = 0;
function camefirst(){

	// there is a white chicken and a white egg on this page.
	var thisone = document.getElementById("egg0");
	var thatone = document.getElementById("chicken");
	//setFill(thisone, "white");
	setFill(thatone, "white");
	thisone.setAttribute("class", "hide")

	// which one should we show first? It is a coin toss
	which = Math.floor(Math.random() * 2);
	if(which == 1){
		// it is the chicken.
		setFill(thatone, "black");
	} else {
		// it is the egg.
		thisone.setAttribute("class", "show");
	}
}

// if there is a chicken, we can lay an egg
function lay(){
	// stop the pinata effect
	nopinata();
	// quick what color is the chicken?
	_currentFill = document.getElementById("chicken").getAttribute("fill");
	// make a new egg
	newegg = document.getElementById('egg0').cloneNode(true);
	var eggcount = _eggs++;
	newegg.setAttribute("class", "show");
	newegg.id = "egg" + _eggs;
	newegg.setAttribute("class", _currentFill);
  document.getElementById('basket').prepend(newegg);
	// make it the same color as the chicken
	setFill(newegg,_currentFill);

}

// if there is an egg, we can break it
function crack(what){
	var colornote = what.getAttribute("class");
	play(colornote);
	what.setAttribute("class", "hide"); // delete until
	// show the cracked egg in place of the current egg
}

function play(who) {
	var audio = document.getElementById(who);
	audio.play();
}

// change any SVG color
function setFill(who, color){
	who.setAttribute("fill", color);
}

let intv;

function pinata() {
  if (!intv) {
    intv = setInterval(swap, 300);
  }
}

function swap() {
	var colors = ['salmon', 'pink', 'coral','gold', 'plum', 'orange', 'khaki', 'olive', 'teal','black'];
	var who = document.getElementById("chicken");
	var _currentFill = colors[Math.floor(Math.random() * colors.length)];
	who.setAttribute("fill", _currentFill)
}

function nopinata() {
  clearInterval(intv);
  // release our intervalID from the variable
  intv = null;
}

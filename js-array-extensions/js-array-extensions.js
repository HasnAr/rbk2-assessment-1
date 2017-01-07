// your code here


Array.prototype.first = function(){
	return this[0];
	//another solution
	// var temp = this;
	// return temp.shift();
}


Array.prototype.last = function(){
	return this[this.length-1];
	//another solution
	// var temp = this;
	// return temp.pop();
}
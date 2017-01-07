var Stack = function() {
	//your code is here
	//array by it nature if only push was used to insert and pop for remove acts as stack
	this._storage=[];
};


Stack.prototype.add = function(val){
	//last element was pushed will always be first element to be poped act excactly as last in first out
	this._storage.push(val);
};

Stack.prototype.remove = function(){
	return this._storage.pop();
};
var Box = function(){}

Box.prototype.set = function(x){
	this.x = x;
}

Box.prototype.get = function(){
	return this.x;
}

var box = new Box();
box.set(10);
var a = box.get();
console.log(a);
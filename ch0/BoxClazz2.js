Function.prototype.make = function(n,f){
	this.prototype[n] = f;
}

var Box = function(){}

Box.make("set",function(x){
	this.x = x;
});

Box.make("get",function(){
	return this.x;
});

var box = new Box();
box.set(12);
console.log(box.get());
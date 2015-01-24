Function.prototype.make = function(n,f){
	this.prototype[n] = f;
	return this;
}

var Box = function(){}

Box.make("set",function(x){
	this.x = x;
}).make("get",function(){
	return this.x;
}).make("display",function(){
	return "Box : { x : "+ this.x+"}";
});

var box = new Box();
box.set(13);
console.log(box.get());
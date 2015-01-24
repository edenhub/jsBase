var Box = function(){}
Box.prototype = {
	set : function(x){
		this.x = x;
	},
	get : function(){
		return this.x;
	}
}

var box = new Box();
box.set(11);
console.log(box.get());

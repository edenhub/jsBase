function F(name){
	this.name = name;
	this.say = function(){
		console.log(this.name);
	}
}

var f = new F("adam");
f.say();
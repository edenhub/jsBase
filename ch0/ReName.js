function F(name){
	this.name = name;
}

var f = new F("adam");

F.prototype.rename = function(name){
	this.name = name;
}

F.prototype.toString = function(){
	console.log("F : { name = "+this.name+"}");
}
f.toString();
f.rename("jack");
f.toString();
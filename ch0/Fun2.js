function f(fn){
	fn.call(null);
}

function f2(fn){
	fn.call("adam");
}

f(function(){
	console.log("handler in inner function");
});

f2(function(name){
	console.log(this.name);	
});
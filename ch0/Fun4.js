var a = 1;
console.log(a);

if(true){
	var a = 2;
}

console.log(a);

(function(){
	var a = 3;
	console.log("-- : "+a);
})();

console.log(a);
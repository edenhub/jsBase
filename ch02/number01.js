var str1 = "12.03";

function printlnString(arg){
	console.log(String(arg));
}

function println(arg){
	console.log(arg);
}

function printlnNumber(arg){
	console.log(Number(arg));
}

function printlnFloat(arg){
	console.log(parseFloat(arg));
}

function printlnInt(arg){
	console.log(parseInt(arg));
}

println(str1);
printlnInt(str1);
printlnFloat(str1);
printlnNumber(str1);
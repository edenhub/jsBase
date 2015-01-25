function test(){
	var MyText = {
		one : "one",
		two : "two",
		three : "three"
	};

	for(var pro in MyText){
		console.log(pro);
	}
}

test();

var test2 = new Array("one","two","three");
for(var i in test2)	
	console.log(test2[i]);

var uri = "http://wwww.baidu.com?query='adam'&age=12";

function println(str){
	console.log(str);
}

println(uri);
var encodeUri = encodeURI(uri);
println(encodeUri);
var decodeUri = decodeURI(encodeUri);
println(decodeUri);
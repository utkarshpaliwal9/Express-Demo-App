console.log("Hello Linux World!")
var express = require('express');
var app = express();

app.get("/", function(req, res) {
	// body...
	console.log("Hello /");
	var str  = "Hi there, welcome to my assignment. Add to the url - /speak/animal_name to listen to its sound, OR - /repeat/a_word_to_be_repeated/num_of_times";
	res.send(str);
});

app.get("/speak/:name", function(req, res) {
	// body...
	console.log("Hello /speak");
	var name = req.params.name.toLowerCase();
	if(name == "pig")
		res.send("<h3>Oink</h3>");
	else if(name == "cow")
		res.send("<h3>Moo</h3>");
	else
		res.send("<h1>IDK what that means</h1>");
});

app.get("/repeat/:word/:num", function(req, res) {
	// body...
	console.log("Hello /repeat");
	var num = req.params.num;
	var word = req.params.word;
	var ans = "";
	for (var i = 0; i < num; i++) {
		ans += word+" ";
	}
	res.send(ans);
});

app.get("*", function(req, res){
	res.send("404 not found");
});

app.listen(3000, process.env.IP);

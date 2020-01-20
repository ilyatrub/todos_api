var express = require("express"),
	app = express();

var port = process.env.PORT || 3000;

app.get("/", function(req, res){
	res.send("FUCK");
})

app.listen(port, function(){
	console.log("SERVER STARTED");
})
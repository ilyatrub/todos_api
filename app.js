var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));



// =======================
// ROOT ROUTES
// =======================

app.get("/", function(req, res){
	res.sendFile("index.html");
})

app.listen(port, function(){
	console.log("SERVER STARTED");
})
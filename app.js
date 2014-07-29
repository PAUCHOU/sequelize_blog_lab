var express = require("express"),
	db = require("./models/index.js"),
	app = express();

app.set("view engine", "ejs");

app.get("/blogs", function(req, res){
	
	db.blog.findAll().success(function(blogs){
		res.render('index', {blogs: blogs})
	})
})

app.listen(3000, function(){
	console.log("server listen on 3000")
})


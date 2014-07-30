var express = require("express"),
	db = require("./models/index.js"),
	app = express(),
	bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.get("/create", function(req, res){
	// shows us our index page, which is a form to create new posts
	res.render('create')
})

app.get("/new", function(req, res){
	console.log("THIS IS THE TITLE WE WANT")
	console.log(req.query.title)
	console.log("THIS IS THE BODY WE WANT")
	console.log(req.query.body)
	console.log("THIS IS THE AUTHOR ID WE WANT")
	console.log(req.query.authorId)
	// req.query.title
	// req.query.body
	// req.query.authorId
	db.post.create({title: req.query.title, body: req.query.body, authorId: req.query.authorId})
	// put req.query info in the DB
	//res.redirect to /posts

	res.redirect("/blog")
})

app.get("/blog", function(req, res){
	// find all the posts in our database
	// render an index page with an array of posts
	// using a forEach loop, we want to go through each post and print out some info
	db.post.findAll().success(function(blogs){
		res.render('index', {blogList: blogs});
	})
})

// need another GET route
// that will show us /user/:id
// we take in the ID using req.params.id
// once we have that ID we make a database query
// search in the DB for all the blog posts WHERE the id of the author is req.params.id
// go through the returned data (probably an array) and loop over using a forEach and print out the name, etc.


app.listen(3000, function(){
	console.log("server listen on 3000")
})


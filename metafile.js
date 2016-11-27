var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

// set up view engine and static asset directory
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// serve home page
app.get('/', function(req, res) {
	console.log("Visitor to homepage.");
	res.render('index');
	res.end();
});

// TEST CODE
app.post('/filedata', function (req, res) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  console.log("req.file: \n" + req.file +
   "\nreq.body: \n" + req.body);
  res.send(req.body);
});

// END TEST CODE

app.listen(port, function() {
	console.log("File data microservice running at " + port)
});
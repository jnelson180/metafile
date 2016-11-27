var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });
// dest removed so as not to permanently save files to app server
var upload = multer({});

// set up view engine and static asset directory
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// serve home page
app.get('/', function(req, res) {
    console.log("Visitor to homepage.");
    res.render('index');
    res.end();
});

app.post('/filedata', upload.single('userFile'), function(req, res) {
    // req.body would hold the text fields, if there were any
    // but req.file is used instead (contains multer data) 
    console.log(req.file);
    res.send(JSON.stringify({
        "filename": req.file.originalname,
        "size": req.file.size,
        "encoding": req.file.encoding,
        "mimetype": req.file.mimetype
    }));
});

app.listen(port, function() {
    console.log("File data microservice running at " + port)
});
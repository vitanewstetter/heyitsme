var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static("./public/"));

app.get("/", function(req, res){
    console.log(req.method);
    console.log(__dirname);
    if (req.url === '/'){
        res.render('index.html');
    }

});

app.listen(8080, function(req, res){
    console.log("We are listening on port 8080!");

});

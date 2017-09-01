

var express = require('express'),
    assert = require('assert'),
    fs = require('fs'),
    cors = require("cors"),
    MongoClient = require("mongodb").MongoClient;

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'html');

var url = "mongodb://127.0.0.1:27017",
    db;

var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('voicemails');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    });
};

//START DATABASE!
MongoClient.connect(url, function(err, database) {
    assert.equal(null, err);
    db = database;
    console.log("Connected successfully to server");

});
app.use(express.static("../build/"));

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', ''*'');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

 //and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.get("/api/voicemails", function(req, res){
    //UNCOMMENT BELOW TO CLEAR DB
    //db.collection('cards').remove({});

    console.log(req.method);
    console.log(__dirname);

    var temp = findDocuments(db, function(docs){
            // console.log(docs);
            res.send(docs);
            db.close;
        });

    // db.collection('voicemails').insert( {
    //   _id: 2,
    //   title: "Testy Test!!",
    //   "name": "Me",
    //   "date": "12/4/2016",
    //   "time": "8:25s",
    //   "tags": [
    //     "butt dial",
    //     "quick",
    //     "happy"
    //   ],
    //   "butt": false,
    //   "drunk": false
    // });
});



app.listen(8080, function(req, res){
    console.log("We are listening on port 8080!");

});

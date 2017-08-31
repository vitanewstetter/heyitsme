

var express = require('express'),
    assert = require('assert'),
    fs = require('fs'),
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

app.get("/api/voicemails", function(req, res){
    console.log(req.method);
    console.log(__dirname);

    var temp = findDocuments(db, function(docs){
            // console.log(docs);
            res.send(docs);
            db.close;
        });

    // db.collection('voicemails').insert( {
    //   _id: 1,
    //   title: "My mom calling to say 'hi honey'",
    //   "name": "Donna DeMatteo",
    //   "date": "12/7/2016",
    //   "time": "4:25s",
    //   "tags": [
    //     "butt dial",
    //     "quick",
    //     "happy"
    //   ],
    //   "butt": false,
    //   "drunk": false
    // });
    // fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    //   if (err){
    //           console.log(err);
    //       }else{
    //           console.log("saved image");
    //       }
    //   });
});



app.listen(8080, function(req, res){
    console.log("We are listening on port 8080!");

});

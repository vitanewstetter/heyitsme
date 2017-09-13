

var express = require('express'),
    assert = require('assert'),
    fs = require('fs'),
    cors = require("cors"),
    formidable = require('express-formidable'),
    app = express(),
    MongoClient = require("mongodb").MongoClient,
    http = require('http'),
    httpServer = http.Server(app),
    io = require('socket.io').listen(httpServer),
    SocketIOFile = require('socket.io-file');

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
app.use(formidable({
  // uploadDir: '/test',
  multiples: false
}));

//
// Access-Control-Allow-Origin stuff
// app.use(function(req, res, next) {
//  res.setHeader('Access-Control-Allow-Origin', ''*'');
//  res.setHeader('Access-Control-Allow-Credentials', 'true');
//  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//  //and remove cacheing so we get the most recent comments
//  res.setHeader('Cache-Control', 'no-cache');
//  next();
// });
app.post("/complete", function(req, res){

    console.log(req.method);
    console.log(req.fields.file);
    console.log(req.fields.num);
    var file = req.fields.file;

    db.collection('voicemails').insert( {
      _id: req.fields.num,
      title: file.description,
      "name": file.name,
      "date": "fuck",
      "time": "ugh",
      "tags": [
        file.tags[0],
        file.tags[1],
        file.tags[2],
        file.tags[3],
        file.tags[4]
      ],
      "butt": false,
      "drunk": false
    });

});

io.on('connection', (socket) => {
	console.log('Socket connected.');

	var count = 0;
	var uploader = new SocketIOFile(socket, {
		// uploadDir: {			// multiple directories
		// 	music: 'data/music',
		// 	document: 'data/document'
		// },
		uploadDir: '../build/voicemails',							// simple directory
		// accepts: ['audio/mpeg', 'audio/mp3'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
		// maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
		chunkSize: 10240,							// default is 10240(1KB)
		transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
		overwrite: true, 							// overwrite file if exists, default is true.
		rename: function(filename) {
			var split = filename.split('.');	// split filename by .(extension)
			var fname = "vm";	// filename without extension
			var ext = split[1];

			return `${fname}_${count++}.${ext}`;
		}
	});
	uploader.on('start', (fileInfo) => {
		console.log('Start uploading');
		console.log(fileInfo);
	});
	uploader.on('stream', (fileInfo) => {
		console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
	});
	uploader.on('complete', (fileInfo) => {
		console.log('Upload Complete.');
		console.log(fileInfo);
	});
	uploader.on('error', (err) => {
		console.log('Error!', err);
	});
	uploader.on('abort', (fileInfo) => {
		console.log('Aborted: ', fileInfo);
	});
});

//voicemail loading part
app.get("/api/voicemails", function(req, res){
    //UNCOMMENT BELOW TO CLEAR DB
    //db.collection('voicemails').remove({});

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



httpServer.listen(8080, function(req, res){
    console.log("We are listening on port 8080!");

});

import React from 'react';


import store from '../store';
import { connect } from 'react-redux';

var SocketIO = require('socket.io-client');
var SocketIOFileClient = require('socket.io-file-client');



class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
    };
  }

  fileName(){
    var file = document.getElementById('fileInput').files[0].name;
    this.setState({ file: file });
  }

  handleFileUpload(e){
    e.fileName();

    var socket = SocketIO();
    var uploader = new SocketIOFileClient(socket);


    uploader.on('start', function(fileInfo) {
        //console.log('Start uploading', fileInfo);
    });
    uploader.on('stream', function(fileInfo) {
        //console.log('Streaming... sent ' + fileInfo.sent + ' bytes.');
    });
    uploader.on('complete', function(fileInfo) {
        console.log('Upload Complete', fileInfo);
        store.dispatch({
          type: "NEEDSUPDATE"
        })
    });
    uploader.on('error', function(err) {
        console.log('Error!', err);
    });
    uploader.on('abort', function(fileInfo) {
        console.log('Aborted: ', fileInfo);
    });

    var UploadButton = document.getElementById("UPLOAD");

    UploadButton.onclick = function(ev) {
        console.log("clicked!");
        ev.preventDefault();

        var fileEl = document.getElementById('fileInput');
        var uploadIds = uploader.upload(fileEl);
    };
  };



  render(){
    return <form id='uploader-form'>
      <input onChange={(e) => this.handleFileUpload(this)} type="file" id="fileInput" required/>
      <label htmlFor="fileInput">Select a file</label>
      <p>{this.state.file}</p>
    </form>
  }
}

const mapStateToProps = function(store) {
    return {
        id: store.upload.uploadData
    };
};

export default connect(mapStateToProps)(Uploader);

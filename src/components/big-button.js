import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import store from '../store';

import Buffer from '../js-css/buffer-loader';

class BigButton extends React.Component {

  changeAbout(e){

    var completed;
    if (this.props.upload){
      axios.get('/api/num').then(function(response){
        console.log("num is " + response.data);
        store.dispatch({
          type: "ADDVOICEMAIL",
          num: response.data
        })
      })

      var nameVal = document.getElementById('upload-name').value;
      var descriptionVal = document.getElementById('upload-description').value;

      var tag1Val = document.getElementById('upload-tag-one').value;
      var tag2Val = document.getElementById('upload-tag-two').value;
      var tag3Val = document.getElementById('upload-tag-three').value;
      var tag4Val = document.getElementById('upload-tag-four').value;
      var tag5Val = document.getElementById('upload-tag-five').value;

      var name = nameVal ? nameVal : store.getState().upload.name;
      var description = descriptionVal ? descriptionVal : store.getState().upload.description;

      var tag1 = tag1Val ? tag1Val : store.getState().upload.tags[0];
      var tag2 = tag2Val ? tag2Val : store.getState().upload.tags[1];
      var tag3 = tag3Val ? tag3Val : store.getState().upload.tags[2];
      var tag4 = tag4Val ? tag4Val : store.getState().upload.tags[3];
      var tag5 = tag5Val ? tag5Val : store.getState().upload.tags[4];

      store.dispatch({
        type: "SETDATA",
        name: name,
        description: description,
        tags: [
            tag1,
            tag2,
            tag3,
            tag4,
            tag5
          ],
      })
      console.log(store.getState().upload)

      var entriesFilled = true;
      for (const key of Object.keys(store.getState().upload)) {
          if (store.getState().upload[key]=== null || store.getState().upload[key]===''){
            entriesFilled = false;
          }
      }
      if (entriesFilled === true){
        store.dispatch({
          type: this.props.id
        });
      }else{
        alert("please fill out all the fields");
        console.log("not completed")
      }

      store.dispatch({
        type: "NEEDSUPDATE"
      })

    }
    else if(this.props.complete){
      axios.get('/api/num').then(function(response){
        console.log("num is " + response.data);
        store.dispatch({
          type: "ADDVOICEMAIL",
          num: response.data
        })
      })
        var num;
        axios.post('/complete', {
          file: store.getState().upload
        }).then(function (response) {
          console.log(response);
          axios.post('/', {
            num: response.data
          })
        }).catch(function (error) {
          console.log(error);
        });

        store.dispatch({
          type: this.props.id
        });
        store.dispatch({
          type: 'NEEDSUPDATE'
        });


    }else if(this.props.id==='NEXT'){
      store.dispatch({
        type: 'CLEARDATA',
      })
      store.dispatch({
        type: this.props.id
      });
    }




  }

  render(){
    return <div style={{width: this.props.width}} onClick = {() => this.changeAbout(this)} className="big-button" id={this.props.id}>
      <p>{this.props.text}</p>
    </div>
  }
}

export class LittleButton extends React.Component {
  render(){
    return <div className="little-button" id={this.props.id}>
      <p>{this.props.text}</p>
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        about: store.about.about,
        uploadData: store.upload.uploadData,
        num: store.num.num,
        update: store.num.needsUpdate
    };
};

export default connect(mapStateToProps)(BigButton);

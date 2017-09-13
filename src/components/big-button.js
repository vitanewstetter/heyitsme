import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import store from '../store';

class BigButton extends React.Component {

  changeAbout(e){
    if (this.props.upload){
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
    }
    else if(this.props.complete){
        axios.post('/complete', {
          file: store.getState().upload,
          num: store.getState().num.num
        }).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });

        //need to add:
        //dispatch to change num
        //load the new file.
        var newNum = store.getState().num.num +=1;
        store.dispatch({
          type: 'ADDVOICEMAIL',
          num: newNum
        });
    }
    store.dispatch({
      type: this.props.id
    });

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
        num: store.num.num
    };
};

export default connect(mapStateToProps)(BigButton);

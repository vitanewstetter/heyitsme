import React from 'react';
import voicemails from '../sample';

import store from '../store';
import { connect } from 'react-redux';

import Sound from '../js-css/sound-loader';
import { context, buffer } from '../js-css/audio';

import  Play from './play';
class MiniPlayer extends React.Component {

  loadSound(){

  }
  getInfo(){

      if(this.props.current){
        return store.getState().upload
      }

      return voicemails["vm_1"];
  }

  render(){
    return <div id="mini-player">
      <Play
        icon="#60A8FF"
        circle="#FFFFFF"
        stroke="none"
        id={this.props.id}
      />
      <div id="mini-player-text">
        <h3>{ this.getInfo().name }</h3>
        <p>{ this.getInfo().description }</p>
      </div>
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        uploadData: store.upload.uploadData
    };
};

export default connect(mapStateToProps)(MiniPlayer);

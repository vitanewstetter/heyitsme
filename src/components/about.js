import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import store from '../store';

import MiniPlayer from './mini-player';
import BigButton from './big-button';
import { LittleButton } from './big-button';

import Next from '../containers/next';
import Upload from '../containers/upload';

class About extends React.Component {

  render(){
    if(store.getState().about.about === 'about'){
      return <div id="about-section">
        <div id="about-subheader">
          <h3>Voicemail is Dead</h3>
          <p>Welcome to the archive of recorded surplus love</p>
        </div>
        <div className="about-rule"></div>
        <MiniPlayer
          id={1}
          sample={true}
        />
        <p id="about-body">Whether it’s a 5-minute butt dial message, a song for your birthday, or a tearful goodbye, voicemail has it’s own special language.

        <br/><br/>Admittedly, voicemail has been all but replaced by texts saying “call me back” - but sometimes all you need is an actual human voice telling you it will be O.K.</p>

        <BigButton
          id="NEXT"
          text="Upload Your Own"
          width="208px"
        />
      </div>
    }
    else if(store.getState().about.about === 'next'){
      return <Next/>
    }
    else if(store.getState().about.about === 'upload'){
      return <Upload/>
    }
  }
}

const mapStateToProps = function(store){
  return {
    about: store.about.about,
    uploadData: store.upload
  }
}
export default connect(mapStateToProps)(About);

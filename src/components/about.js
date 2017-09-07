import React from 'react';
import { connect } from 'react-redux';

import store from '../store';

import MiniPlayer from './mini-player';
import BigButton from './big-button';
import { LittleButton } from './big-button';

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
          id="1"
        />
        <p id="about-body">Whether it’s a 5-minute butt dial message, a song for your birthday, or a tearful goodbye, voicemail has it’s own special language.

        <br/><br/>Admittedly, voicemail has been all but replaced by texts saying “call me back” - but sometimes all you need is an actual human voice telling you it will be O.K.</p>

        <BigButton
          id="NEXT"
          text="Upload Your Own"
        />
      </div>
    }
    else if(store.getState().about.about === 'next'){
      return <div id="about-section">
      <LittleButton
        id="SELECT"
        text="Select a file"
      />
        <form id="upload-input">
          <p className="upload-body-text">This voicemail was left for me by
          <input className="upload-text-input" name="upload-name" type="text" maxLength="20"/>
           and I think if I had to name it, I would call it
          <input className="upload-text-input" name="upload-name" type="text" maxLength="20"/>
          because it is
          <input className="upload-text-input wide-input" name="upload-description" type="text" maxLength="40"/>
          . Five words I would use to describe it are:
          <input className="upload-text-input narrow-input" name="upload-tag-one" type="text" maxLength="13"/>,
          <input className="upload-text-input narrow-input" name="upload-tag-two" type="text" maxLength="13"/>,
          <input className="upload-text-input narrow-input" name="upload-tag-three" type="text" maxLength="13"/>,
          <input className="upload-text-input narrow-input" name="upload-tag-four" type="text" maxLength="13"/>,
          and
          <input className="upload-text-input narrow-input" name="upload-tag-five" type="text" maxLength="13"/>.
          <br/>
          </p>
          
        </form>
        <BigButton
          id="UPLOAD"
          text="Next"
        />
      </div>
    }
    else if(store.getState().about.about === 'upload'){
      return <div id="about-section">

        <BigButton
          id="ABOUT"
          text="Upload"
        />
      </div>
    }
  }
}

const mapStateToProps = function(store){
  return {
    about: store.about.about
  }
}
export default connect(mapStateToProps)(About);

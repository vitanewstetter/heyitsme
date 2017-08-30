import React from 'react';

import MiniPlayer from './mini-player';
import BigButton from './big-button';
class About extends React.Component {
  render(){
    return <div id="about">
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
        id="go-to-upload"
        text="Upload Your Own"
      />
    </div>

  }
}

export default About

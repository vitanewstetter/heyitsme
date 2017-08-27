import React from 'react';

import  Play from './play';
export default class MiniPlayer extends React.Component {
  render(){
    return <div id="mini-player">
      <Play
        icon="#60A8FF"
        circle="#FFFFFF"
        stroke="none"
        id="41"
      />
      <div id="mini-player-text">
        <h3>Donna DeMatteo</h3>
        <p>Great Butt Dial</p>
      </div>
    </div>
  }
}

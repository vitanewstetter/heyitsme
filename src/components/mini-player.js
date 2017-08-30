import React from 'react';
import voicemails from '../sample';

import  Play from './play';
export default class MiniPlayer extends React.Component {
  getInfo(){
      var temp = "vm_" + this.props.id;
      return voicemails[temp];
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
        <p>{ this.getInfo().title }</p>
      </div>
    </div>
  }
}

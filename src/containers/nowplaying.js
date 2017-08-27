import React from 'react';
import { connect } from 'react-redux';

import store from '../store';

import Play from '../components/play';
import voicemails from '../sample';
// class SongInfo extends React.Component {
//   render(){
//     return <div id="now-playing-info">
//     </div>
//   }
// }



export default class NowPlaying extends React.Component {
  getInfo(){
      var temp = "vm_" + this.props.id;
      return voicemails[temp];
  }

  render(){
    if (this.props.id !== 'null'){
      return <div id="now-playing">
        <h2>Currently Playing:</h2>
        <div id ="now-playing-info">
          <Play
            icon="#60A8FF"
            circle="#FFFFFF"
            stroke="#60A8FF"
            id="41"
          />
          <div id="now-playing-text">
            <h3>{
              this.getInfo().name
            }</h3>
            <h4>{
              this.getInfo().title
            }</h4>
          </div>
        </div>
      </div>
    }
    else return null
  }
}

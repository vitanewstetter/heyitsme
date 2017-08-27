import React from 'react';
import { connect } from 'react-redux';

import store from '../store';

//makes the spacing right for the div holding the icon svg
var divStyle = {
  display: "inline-block"
}
//play and pause component
class Play extends React.Component {
  //function contained in component that controls what
  //happens when you click on a play button
  playAudio(){
    console.log('play');
    //send dispatch to the store telling it that we are
    //playing a new song. if it's the same song, it will
    //start where it left off.
    store.dispatch({
      type: 'NEW_SONG',
      id: this.props.id
    });
    //then call the song playing function, which checks
    //the playing status and either plays or pauses.
    songPlaying();
  }
  //function contained in component that controls what
  //happens when you click on a pause button
  pauseAudio(){
    console.log('pause');
    store.dispatch({
      type: 'PAUSE_SONG',
      id: this.id
    });
    songPlaying();
  }
  render(){
    if(store.getState().songManager.playing && store.getState().songManager.song === this.props.id){
      return <div style={divStyle}>
        <svg onClick={(e) => this.pauseAudio(e)} id={this.props.id} className="pause_button" width="80px" height="80px" viewBox="-8 -8 96 96" version="1.1">
          <g id="Pause"  stroke={this.props.stroke} fillRule="evenodd" >
              <ellipse id="Oval" fill={this.props.circle} cx="40" cy="40" rx="40" ry="40" stroke={this.props.stroke} strokeWidth="8" ></ellipse>
              <path d="M30,24.8422713 L30,54.6529968" id="Path-3" stroke={this.props.icon} strokeLinecap="round" strokeWidth="8"></path>
              <path stroke={this.props.icon} strokeWidth="8" d="M50,24.8422713 L50,54.6529968" id="Path-3-Copy" strokeLinecap="round"></path>
          </g>
        </svg>
        <audio id={"vm_" + this.props.id}>
          <source src={"/audio-files/voicemail-" + this.props.id + ".m4a"}/>
        </audio>
      </div>
    }
    else{
      return <div style={divStyle}>
          <svg onClick={(e) => this.playAudio(e)} id={this.props.id} className="play_button" width="80px" height="80px" viewBox="-8 -8 96 96" version="1.1">
          <g id="v4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Home" transform="translate(-1081.000000, -499.000000)">
                  <g id="Info" transform="translate(1000.000000, 355.000000)">
                      <g id="Example" transform="translate(81.000000, 144.000000)">
                          <g id="Play-Button">
                              <circle id="Oval" stroke={this.props.stroke} strokeWidth="8" fill={this.props.circle} cx="39.6055328" cy="39.6055328" r="39.6055328"></circle>
                              <path d="M29.3885668,59.1746983 L59.6129637,42.0738428 L59.6129637,42.0738428 C60.5743223,41.5299096 60.9127124,40.3096294 60.3687792,39.3482708 C60.1900764,39.0324279 59.9288066,38.7711581 59.6129637,38.5924553 L29.3885668,21.4915998 L29.3885668,21.4915998 C28.4272082,20.9476666 27.206928,21.2860567 26.6629948,22.2474153 C26.4930203,22.5478317 26.4036885,22.887125 26.4036885,23.2322936 L26.4036885,57.4340046 L26.4036885,57.4340046 C26.4036885,58.5385741 27.299119,59.4340046 28.4036885,59.4340046 C28.7488571,59.4340046 29.0881504,59.3446728 29.3885668,59.1746983 Z" id="Path-2" fill={this.props.icon}></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
          <audio id={"vm_" + this.props.id}>
            <source src={"/audio-files/voicemail-" + this.props.id + ".m4a"}/>
          </audio>
        </div>
    }
  }
}

var songPlaying = function(){
  var current = document.getElementById("vm_" + store.getState().songManager.song);
  if (store.getState().songManager.playing){
    current.play();
  }
  else if (!store.getState().songManager.playing){
    current.pause();
  }
};

const mapStateToProps = function(store) {
    return {
        playing: store.songManager.playing,
        song: store.songManager.song,
    };
};

export default connect(mapStateToProps)(Play);

import React from 'react';

import store from '../store';
import { connect } from 'react-redux';

import MiniPlayer from '../components/mini-player';

import BigButton from '../components/big-button';

class Upload extends React.Component{
  render(){
    return <div id="about-section">

    <div id="about-subheader">
      <br/>
      <br/>
      <p>Here is a preview of your new upload. Click 'UPLOAD' to continue or 'BACK' to make some edits.</p>
    </div>

    <MiniPlayer
      id={store.getState().num.num}
      current='true'
      sample={false}
    />

    <BigButton
      id="NEXT"
      text="Back"
      width="160px"
    />
      <BigButton
        id="ABOUT"
        text="Upload"
        width="160px"
        complete="true"
      />
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        num: store.num.num
    };
};

export default connect(mapStateToProps)(Upload);

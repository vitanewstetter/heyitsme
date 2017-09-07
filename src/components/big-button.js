import React from 'react';
import { connect } from 'react-redux';

import store from '../store';

class BigButton extends React.Component {
  changeAbout(e){
    store.dispatch({
      type: this.props.id
    })
  }

  render(){
    return <div onClick = {() => this.changeAbout(this)} className="big-button" id={this.props.id}>
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
        about: store.about.about
    };
};

export default connect(mapStateToProps)(BigButton);

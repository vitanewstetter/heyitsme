import React from 'react';

import store from '../store';
import { connect } from 'react-redux';
import axios from 'axios';

import Sound from '../js-css/sound-loader';
import { context, buffer } from '../js-css/audio';

import  Play from './play';
class MiniPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        title: ''
    };


  }

  // componentWillMount(){
  //   this.setState({data: this.getInfo()});
  //   console.log(this.state)
  // }

  componentDidMount(){
    this.getInfo();
    console.log(this.state)
  }

  componentWillReceiveProps(){
    this.getInfo();
    console.log(this.state)
  }

  getInfo(){
      if(this.props.current){
        //return store.getState().upload
        this.setState({
          name: store.getState().upload.name,
          title: store.getState().upload.description
        });
      }

      //var data;
      axios.post('/api/current', {num: this.props.id}).then((response) => {
          this.setState({
            name: response.data[0].name,
            title: response.data[0].title
          });

        });
      //return data;
  }

  render(){
    return <div id="mini-player">
      <Play
        icon="#60A8FF"
        circle="#FFFFFF"
        stroke="none"
        id={this.props.id}
        sample={true}
      />
      <div id="mini-player-text">
        <h3>{ this.state.name }</h3>
        <p>{ this.state.title }</p>
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

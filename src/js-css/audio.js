
import axios from 'axios';

import Buffer from './buffer-loader';
import store from '../store';

import { connect } from 'react-redux';



axios.get('/api/num').then(function(response){
  console.log("made it here!");
  var sounds = [];
  for (var i=0; i<=response.data-1; i++){
    sounds.push('/voicemails/vm_' + i + '.m4a');
  }
  store.dispatch({
    type: "LOADSOUNDS",
    sounds: sounds
  })
  console.log(store.getState())
})

export const context = new (window.AudioContext || window.webkitAudioContext)();

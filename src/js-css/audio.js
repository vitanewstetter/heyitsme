// import Buffer from './buffer-loader';
//
// import axios from 'axios';
//
// export var sounds = [];
// axios.get('/api/num').then(function(response){
//   console.log("made it here!");
//   for (var i=0; i<=16; i++){
//     sounds.push('/audio-files/vm-' + i + '.m4a');
//   }
// })
//
//
//
// export const context = new (window.AudioContext || window.webkitAudioContext)();
// export const buffer = new Buffer(context, sounds);
// buffer.loadAll();

import Buffer from './buffer-loader';

export var sounds = [];
for (var i=0; i<=16; i++){
  sounds.push('/audio-files/vm-' + i + '.m4a');
}

export const context = new (window.AudioContext || window.webkitAudioContext)();
export const buffer = new Buffer(context, sounds);
buffer.loadAll();

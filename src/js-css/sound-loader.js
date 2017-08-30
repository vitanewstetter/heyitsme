

export default class Sound {

  constructor(context, buffer, id) {
    this.context = context;
    this.buffer = buffer;
    this.id = id
    this.time = 0;
  }

  init() {
    this.gainNode = this.context.createGain();
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    if (this.context.state === 'suspended'){
      this.context.resume();
    }
  }

  play() {
    this.init();
    this.source.start(this.context.currentTime);
  }

  stop(){
    this.source.stop(this.context.currentTime);
  }

  unPause() {
    this.context.resume();
  }

  pause() {
    this.time = this.context.currentTime;
    this.context.suspend();
  }

}

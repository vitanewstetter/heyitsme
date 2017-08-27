import React from 'react';

export default class BigButton extends React.Component {
  render(){
    return <div className="big-button" id={this.props.id}>
      <p>{this.props.text}</p>
    </div>
  }
}

import React from 'react';

import Play from './play';

class FeedItem extends React.Component {
  render(){
    return <div className = "feed-item">
      <Play
        icon="#E8EAF4"
        circle="#FFFFFF"
        stroke="#E8EAF4"
        id={ this.props.id }
        feed={true}
      />
      <div className="feed-item-titles">
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.title }</h3>
      </div>
    </div>
  }
}

export default FeedItem;

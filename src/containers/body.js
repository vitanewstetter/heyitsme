import React from 'react';

import Browse from './browse';
import Content from './content';

class Body extends React.Component {
  render(){
    return <div id="body-container">
      <Browse/>
      <Content/>
    </div>
  }
}

export default Body

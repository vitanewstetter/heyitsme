import React from 'react';

import Logo from '../components/icons';
import About from '../components/about';
class Content extends React.Component {
  render(){
    return <div id="content-container">
      <Logo/>
      <About/>
    </div>
  }
}

export default Content

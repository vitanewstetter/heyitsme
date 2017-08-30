import React from 'react';

import BrowseCriteria from './browsecriteria';
import Feed from './feed';

class Browse extends React.Component {
  render(){
    return <div id="browse-container" className="general-style">
      <BrowseCriteria/>
      <Feed/>
    </div>
  }
}

export default Browse

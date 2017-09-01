import React from 'react';

import BrowseCriteria from './browsecriteria';
import Feed from './feed';

var url = "http://localhost:8080/api/voicemails"

class Browse extends React.Component {
  render(){
    return <div id="browse-container" className="general-style">
      <BrowseCriteria/>
      <Feed url={ url }/>
    </div>
  }
}

export default Browse

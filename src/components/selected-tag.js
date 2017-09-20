import React from 'react';

import store from '../store';

class SelectedTag extends React.Component {
  render(){
    return <div className="selected-tag" id={this.props.index}>
      <p>{ this.props.tag }</p>
      <svg onClick={() => deleteTag(this) } id={ this.props.tag } width="10px" height="11px" viewBox="0 0 10 11" >
          <g id="v4" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round">
              <g id="Group" transform="translate(1.000000, 1.000000)" stroke="#606169" strokeWidth="2">
                  <path d="M0,0.843191744 L7.84197641,8.40509757" id="Path-6"></path>
                  <path d="M7.84197641,0.843191744 L0,8.40509757" id="Path-6-Copy"></path>
              </g>
          </g>
      </svg>
    </div>
  }
}

var deleteTag = function(e){
  console.log('clicked x');

  store.dispatch({
    type: 'DELETE_TAG',
    id: e.props.tag,
    index: e.props.index,
  });
  store.dispatch({
    type: 'NEEDSUPDATE'
  });
  console.log(store.getState().searchCriteria);
}

export default SelectedTag;

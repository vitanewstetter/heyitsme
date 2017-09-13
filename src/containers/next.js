import React from 'react';

import store from '../store';

import BigButton from '../components/big-button';
import Uploader from '../components/uploader';

class Next extends React.Component{
  render(){
    return <div id="about-section">
      <form id="upload-input">
        <Uploader/>

        <p className="upload-body-text">This voicemail was left for me by
        <input placeholder= {store.getState().upload.name} className="upload-text-input" id="upload-name" type="text" maxLength="20"/>
         and it is a
        <input placeholder= {store.getState().upload.description} className="upload-text-input wide-input" id="upload-description" type="text" maxLength="40"/>
        . Five words I would use to describe it are:
        <input placeholder= {store.getState().upload.tags[0]} className="upload-text-input narrow-input" id="upload-tag-one" type="text" maxLength="13"/>,
        <input placeholder= {store.getState().upload.tags[1]} className="upload-text-input narrow-input" id="upload-tag-two" type="text" maxLength="13"/>,
        <input placeholder= {store.getState().upload.tags[2]} className="upload-text-input narrow-input" id="upload-tag-three" type="text" maxLength="13"/>,
        <input placeholder= {store.getState().upload.tags[3]} className="upload-text-input narrow-input" id="upload-tag-four" type="text" maxLength="13"/>,
        and
        <input placeholder= {store.getState().upload.tags[4]} className="upload-text-input narrow-input" id="upload-tag-five" type="text" maxLength="13"/>.
        <br/>
        </p>

      <BigButton
        id="UPLOAD"
        text="Next"
        upload= 'true'
        width="160px"
      />
      </form>
    </div>
  }
}

export default Next

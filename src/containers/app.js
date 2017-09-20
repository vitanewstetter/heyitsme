import React from 'react';

import Body from './body';
import axios from 'axios';

import store from '../store';
import { connect } from 'react-redux';

class App extends React.Component {

    componentWillMount(){
      axios.get('/api/num').then(function(response){
        store.dispatch({
          type: "ADDVOICEMAIL",
          num: response.data
        })
      })
    }

    componentWillReceiveProps(){
      axios.get('/api/num').then(function(response){
        store.dispatch({
          type: "ADDVOICEMAIL",
          num: response.data
        })
      })
    }

    render(){
      return <div id="app">
          <Body/>
      </div>
    }
}

const mapStateToProps = function(store) {
    return {
        num: store.num.num,
    };
};

export default connect(mapStateToProps)(App);

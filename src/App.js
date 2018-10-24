import React, { Component } from 'react';

import Amplify, { Auth, Analytics } from 'aws-amplify'
import awsconfig from './aws-exports';

import { Main } from './components';
import store, { AmplifyBridge } from './store';

import s from './App.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

Auth.configure(awsconfig);
Analytics.configure(awsconfig);
Amplify.configure(awsconfig);

new AmplifyBridge(store);

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    );
  }
}

export default withStyles(s)(App);

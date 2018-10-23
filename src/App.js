import React, { Component } from 'react';
import logo from './logo.svg';

import Auth from '@aws-amplify/auth';
import Analytics from '@aws-amplify/analytics';
import awsconfig from './aws-exports';

import s from './App.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

Auth.configure(awsconfig);
Analytics.configure(awsconfig);

Analytics.record('Booking system initial event');

class App extends Component {

  render() {
    return (
      <div className={s.app}>
        <header className={s.header}>
          <img src={logo} className={s.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={s.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(s)(App);

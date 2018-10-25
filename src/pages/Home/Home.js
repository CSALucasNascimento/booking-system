/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

import { Button } from 'reactstrap';
import { Analytics, API, graphqlOperation } from "aws-amplify";
import * as queries from '../../graphql/queries';


// Simple query
const listSpaces = await API.graphql(graphqlOperation(queries.listSpaces));
console.log(listSpaces.json());

class Home extends React.Component {

  handleAnalytics = () => {
    console.log('analytics call');
    Analytics.record({
      name: "testing Analytics"
    });
  }

  render() {
    
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          <Button onClick={this.handleAnalytics}> Test Analytics </Button>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

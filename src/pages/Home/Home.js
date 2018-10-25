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
import { Connect } from 'aws-amplify-react';
import * as queries from '../../graphql/queries';


class Home extends React.Component {

  handleAnalytics = () => {
    console.log('analytics call');
    Analytics.record({
      name: "testing Analytics"
    });
  }

  render() {
    
    const ListSpaces = ({ spaces }) => (
      <div>
        <h3>All Space</h3>
        <ul>
          { spaces.map( (space) => <li key={space.id} >{space.title}</li> ) }
        </ul>
      </div>
    );

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          <Button onClick={this.handleAnalytics}> Test Analytics </Button>
          <Connect query={graphqlOperation(queries.listSpaces)}>
            {
              ({data: {listSpaces}, loading, error}) => {
                if (error) return (<h3>Error</h3>);
                if (loading || !listSpaces ) return (<h3>Loading...</h3>);
                <ListSpaces spaces={listSpaces.items} />
              }
            }
          </Connect>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

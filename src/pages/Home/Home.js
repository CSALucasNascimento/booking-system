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
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import * as subscriptions from '../../graphql/subscriptions';


class AddSpace extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    userId: '2491cffa-b9d0-457e-b8bf-00b6bafab3c3',
    spaceType: 'Studio',
    spaceSize: '',
    spaceCapacity: 0,
    country: '',
    state: '',
    city: '',
    address: '',
    postCode: 0,
    lat: '123.123333',
    lon: '123.123333',
    title: '',
    description: '',
    bookingType: 'instant',
    isPublished: true,
    isReady: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })

  handleChange(name, ev) {
      this.setState({ [name]: ev.target.value });
  }

  async submit() {
    const { onCreateSpace } = this.props;
    var input = {
      userId: this.state.userId,
      spaceType: this.state.spaceType,
      spaceSize: this.state.spaceSize,
      spaceCapacity: this.state.spaceCapacity,
      country: this.state.country,
      state: this.state.state,
      city: this.state.city,
      address: this.state.address,
      postCode: this.state.postCode,
      lat: this.state.lat,
      lon: this.state.lon,
      title: this.state.title,
      description: this.state.description,
      bookingType: this.state.bookingType,
      isPublished: this.state.isPublished,
      isReady: this.state.isReady,
      createdAt: this.state.createdAt,
      updatedAt: this.state.updatedAt
    }
    await onCreateSpace({input})
  }

  render(){
    return (
        <div>
            <input name="spaceSize" placeholder="spaceSize" onChange={(ev) => { this.handleChange('spaceSize', ev)}} />
            <input name="spaceCapacity" placeholder="spaceCapacity" onChange={(ev) => { this.handleChange('spaceCapacity', ev)}} />
            <input name="country" placeholder="country" onChange={(ev) => { this.handleChange('country', ev)}} />
            <input name="state" placeholder="state" onChange={(ev) => { this.handleChange('state', ev)}} />
            <input name="city" placeholder="city" onChange={(ev) => { this.handleChange('city', ev)}} />
            <input name="address" placeholder="address" onChange={(ev) => { this.handleChange('address', ev)}} />
            <input name="postCode" placeholder="postCode" onChange={(ev) => { this.handleChange('postCode', ev)}} />
            <input name="title" placeholder="title" onChange={(ev) => { this.handleChange('title', ev)}} />
            <input name="description" placeholder="description" onChange={(ev) => { this.handleChange('description', ev)}} />
            <button onClick={this.submit.bind(this)}>
                Add
            </button>
        </div>
    );
  }

}

class Home extends React.Component {

  handleAnalytics = () => {
    Analytics.record({
      name: "testing Analytics"
    });
  }

  renderSpaces = (space) => {
    return (
      <li key={space.id}>{space.title}</li>
    )
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Booking System</h1>
          
          <Connect mutation={graphqlOperation(mutations.createSpace)}>
            {({mutation}) => (
              <AddSpace onCreateSpace={mutation} />
            )}
          </Connect>

          <h3>All Space</h3>
          <Connect 
            query={graphqlOperation(queries.listSpaces)}
            subscription={graphqlOperation(subscriptions.onCreateSpace)}
            onSubscriptionMsg={(prev, { onCreateSpace }) => {
              return prev; 
            }}
          >
            {
              ({data: {listSpaces}, loading, error}) => {
                if (error) return (<h3>Error</h3>);
                if (loading || !listSpaces ) return (<h3>Loading...</h3>);
                return (
                  <div >
                    <ul>
                      {[].concat(listSpaces.items).sort((a, b) => b.id - a.id).map(this.renderSpaces)}
                    </ul>
                  </div>
                )
              }
            }
          </Connect>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

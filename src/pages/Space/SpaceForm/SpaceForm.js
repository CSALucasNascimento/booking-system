import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SpaceForm.css';

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';

class SpaceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  static defaultProps = {
    onAdd: () => null
  }

  getInitialState = () => ({
    userId: '2491cffa-b9d0-457e-b8bf-00b6bafab3c3',
    spaceType: 'Studio',
    spaceSize: '245sqm',
    spaceCapacity: 100,
    country: 'AU',
    state: 'NSW',
    city: 'Mascot',
    address: 'U306/581-587 Gardeners Rd',
    postCode: 2020,
    lat: '123.123333',
    lon: '123.123333',
    title: 'Studio',
    description: 'Studio description',
    bookingType: 'instant',
    isPublished: true,
    isReady: true,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })

  handleChange = (field, event) => {
    const { target: { value } } = event;
    this.setState({
        [field]: value
    });
  }

  handleAdd = async () => {
    const { userId, spaceType, spaceSize, spaceCapacity, country, state, city, address, postCode, lat, lon, title, description, bookingType, isPublished, isReady, createdAt, updatedAt } = this.state;
    this.setState(this.getInitialState(), () => {
        this.props.onAdd({ userId, spaceType, spaceSize, spaceCapacity, country, state, city, address, postCode, lat, lon, title, description, bookingType, isPublished, isReady, createdAt, updatedAt });
    });
    const newSpace = await API.graphql(graphqlOperation(mutations.createSpace, {input: this.state}));
    console.log(newSpace);
  }

  handleCancel = () => {
    this.setState(this.getInitialState());
  }

  render(){
    const { spaceSize, spaceCapacity, country, state, city, address, postCode, title, description } = this.state;
    return (
      <div>
        <input name="spaceSize" placeholder="spaceSize" value={spaceSize} onChange={this.handleChange.bind(this, 'spaceSize')} />
        <input name="spaceCapacity" placeholder="spaceCapacity" value={spaceCapacity} onChange={this.handleChange.bind(this, 'spaceCapacity')} />
        <input name="country" placeholder="country" value={country} onChange={this.handleChange.bind(this, 'country')} />
        <input name="state" placeholder="state" value={state} onChange={this.handleChange.bind(this, 'state')} />
        <input name="city" placeholder="city" value={city} onChange={this.handleChange.bind(this, 'city')} />
        <input name="address" placeholder="address" value={address} onChange={this.handleChange.bind(this, 'address')} />
        <input name="postCode" placeholder="postCode" value={postCode} onChange={this.handleChange.bind(this, 'postCode')} />
        <input name="title" placeholder="title" value={title} onChange={this.handleChange.bind(this, 'title')} />
        <input name="description" placeholder="description" value={description} onChange={this.handleChange.bind(this, 'description')} />
        <button onClick={this.handleAdd}>Add New Space</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }
}

export default withStyles(s)(SpaceForm);

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SpaceForm.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    userId: '',
    spaceType: '',
    spaceSize: '',
    spaceCapacity: 0,
    country: '',
    state: '',
    city: '',
    address: '',
    postCode: 0,
    lat: '',
    lon: '',
    title: '',
    description: '',
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
    return (
      <Form>
        <FormGroup>
          <Label for="spaceSize">Space size</Label>
          <Input type="text" name="spaceSize" id="spaceSize" placeholder="Space size" onChange={this.handleChange.bind(this, 'spaceSize')}/>
        </FormGroup>
        <FormGroup>
          <Label for="spaceCapacity">Space capacity</Label>
          <Input type="number" name="spaceCapacity" id="spaceCapacity" placeholder="Space capacity" onChange={this.handleChange.bind(this, 'spaceCapacity')}/>
        </FormGroup>
        <FormGroup>
          <Label for="country">Country</Label>
          <Input type="text" name="country" id="country" placeholder="Country" onChange={this.handleChange.bind(this, 'country')}/>
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" id="state" placeholder="State" onChange={this.handleChange.bind(this, 'state')}/>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" id="city" placeholder="City" onChange={this.handleChange.bind(this, 'city')}/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="Address" onChange={this.handleChange.bind(this, 'address')}/>
        </FormGroup>
        <FormGroup>
          <Label for="postCode">Post Code</Label>
          <Input type="number" name="postCode" id="postCode" placeholder="Post Code" onChange={this.handleChange.bind(this, 'postCode')}/>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Title" onChange={this.handleChange.bind(this, 'title')}/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" id="description" onChange={this.handleChange.bind(this, 'description')}/>
        </FormGroup>
        <Button onClick={this.handleAdd}>Add</Button>
        <Button onClick={this.handleCancel}>Cancel</Button>
      </Form>
    );
  }
}

export default withStyles(s)(SpaceForm);

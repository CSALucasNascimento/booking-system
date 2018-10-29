import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SpaceFormModal.css';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from '../../../graphql/mutations';

class SpaceFormModal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.space);
  }

  static defaultProps = {
    onAddOrEdit: () => null
  }

  handleChange = (field, event) => {
    const { target: { value } } = event;
    this.setState({
        [field]: value
    });
  }

  handleAddOrEdit = async () => {
    const space = this.state;
    console.log(space)
    const data = (!space.id || space.id === null) ? 
    await API.graphql(graphqlOperation(mutations.createSpace, {input: space})) : 
    await API.graphql(graphqlOperation(mutations.updateSpace, {input: space}))
    console.log(data);
  }

  render(){
    return (
      this.state ?
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <Form>
            <ModalHeader>Add an Item</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="spaceSize">Space size</Label>
                <Input type="text" name="spaceSize" id="spaceSize" placeholder="Space size" value={this.state.spaceSize} onChange={this.handleChange.bind(this, 'spaceSize')}/>
              </FormGroup>
              <FormGroup>
                <Label for="spaceCapacity">Space capacity</Label>
                <Input type="number" name="spaceCapacity" id="spaceCapacity" placeholder="Space capacity" value={this.state.spaceCapacity} onChange={this.handleChange.bind(this, 'spaceCapacity')}/>
              </FormGroup>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input type="text" name="country" id="country" placeholder="Country" value={this.state.country} onChange={this.handleChange.bind(this, 'country')}/>
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input type="text" name="state" id="state" placeholder="State" value={this.state.state} onChange={this.handleChange.bind(this, 'state')}/>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="City" value={this.state.city} onChange={this.handleChange.bind(this, 'city')}/>
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="text" name="address" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChange.bind(this, 'address')}/>
              </FormGroup>
              <FormGroup>
                <Label for="postCode">Post Code</Label>
                <Input type="number" name="postCode" id="postCode" placeholder="Post Code" value={this.state.postCode} onChange={this.handleChange.bind(this, 'postCode')}/>
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title" value={this.state.title} onChange={this.handleChange.bind(this, 'title')}/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.handleChange.bind(this, 'description')}/>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddOrEdit}>Save</Button>{' '}
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
        : null
    );
  }
}

export default withStyles(s)(SpaceFormModal);

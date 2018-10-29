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
import s from './SpaceList.css';

import { Container, Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody } from 'reactstrap';
import { API, graphqlOperation } from "aws-amplify";
import * as query from './query';
import SpaceFormModal from '../SpaceFormModal/SpaceFormModal';

class SpaceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    space: {
      userId: '123123123',
      spaceType: 'studio',
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
    },
    spaces: [],
    modal: false
  })

  static defaultProps = {
      onDelete: () => null,
      onEdit: () => null,
  }

  componentDidMount = async() => {
    try {
      const spaces = await API.graphql(graphqlOperation(query.listSpaces));
      this.setState({ spaces: spaces.data.listSpaces.items });
    } catch (err) {
      console.log('error fetching data: ', err)
    }
  }

  handleDelete = (space) => {
      if (window.confirm('Are you sure')) {
          this.props.onDelete(space);
      }
  }

  handleEdit = (space) => {
    this.setState({
      space: space
    });
    this.setState({
      modal: !this.state.modal
    });
  }

  handleAdd = () => {
    this.setState({
      space: this.getInitialState().space
    });
    this.setState({
      modal: !this.state.modal
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  renderSpaces = (space) => {
    return (
      <Card key={space.id}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{space.title}</CardTitle>
          <CardSubtitle>{space.title}</CardSubtitle>
          <CardText>{space.description}</CardText>
          <Button onClick={this.handleEdit.bind(this, space)}>Edit</Button>
          <Button onClick={this.handleDelete.bind(this, space)}>Delete</Button>
        </CardBody>
      </Card>
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleAdd.bind(this, this.state.space)}>Add +</Button>
        <SpaceFormModal space={this.state.space} modal={this.state.modal} toggle={this.toggle}/>
        <Container style={{padding: 10}}>
          <CardColumns>
            { [].concat(this.state.spaces).sort((a, b) => b.id - a.id).map(this.renderSpaces) }
          </CardColumns>
        </Container>
      </div>
    )

  }
}

export default withStyles(s)(SpaceList);

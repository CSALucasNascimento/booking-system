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
import { Analytics, API, graphqlOperation } from "aws-amplify";
import { Connect } from 'aws-amplify-react';
import SpaceFormModal from '../SpaceFormModal/SpaceFormModal';

import * as mutations from '../../../graphql/mutations';
import * as query from './query';
import * as subscriptions from '../../../graphql/subscriptions';

class SpaceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        spaces: [],
        modal: false,
        space: {}
    }
  }

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
    // console.log('handleEdit', space)
    // this.toggle();
}

handleEditCancel = (id) => {
    const { editing } = this.state;
    const { [id]: curr, ...others } = editing;
    this.setState({ editing: { ...others } });
}

handleFieldEdit = (id, field, event) => {
    const { target: { value } } = event;
    const { editing } = this.state;
    const editData = { ...editing[id] };
    editData[field] = value;
    this.setState({
        editing: { ...editing, ...{ [id]: editData } }
    });
}

handleEditSave = async (id) => {
    const { editing } = this.state;
    const { [id]: editedSpace, ...others } = editing;
    this.props.onEdit({ ...editedSpace });
    const updatedSpace = await API.graphql(graphqlOperation(mutations.updateSpace, { input: editedSpace } ));
    this.setState({
        editing: { ...others }
    });
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

// renderOrEditSpace = (space) => {
//     const { editing } = this.state;

//     const editData = editing[space.id];
//     const isEditing = !!editData;

//     return (
//         !isEditing ?
//             (
//                 <tr key={space.id}>
//                     <td>{space.id}</td>
//                     <td>{space.title}</td>
//                     <td>{space.description}</td>
//                     <td>
//                         <button onClick={this.handleEdit.bind(this, space)}>Edit</button>
//                         <button onClick={this.handleDelete.bind(this, space)}>Delete</button>
//                     </td>
//                 </tr>
//             ) : (
//                 <tr key={space.id}>
//                     <td>
//                         {space.id}
//                     </td>
//                     <td>
//                         <input type="text" value={editData.title} onChange={this.handleFieldEdit.bind(this, space.id, 'title')} />
//                     </td>
//                     <td>
//                         <input type="text" value={editData.description} onChange={this.handleFieldEdit.bind(this, space.id, 'description')} />
//                     </td>
//                     <td>
//                         <button onClick={this.handleEditSave.bind(this, space.id)}>Save</button>
//                         <button onClick={this.handleEditCancel.bind(this, space.id)}>Cancel</button>
//                     </td>
//                 </tr>
//             )
//     );
// }

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
      <SpaceFormModal space={this.state.space} modal={this.state.modal} toggle={this.toggle}/>
      <Container style={{padding: 10}}>
        <CardColumns>
          { [].concat(this.state.spaces).sort((a, b) => b.id - a.id).map(this.renderSpaces) }
        </CardColumns>
      </Container>
    </div>
  )
    
    
    
    
    
    
    
    
    
    
    // <table width="100%">
    //     <thead>
    //         <tr>
    //             <th>ID</th>
    //             <th>Title</th>
    //             <th>Description</th>
    //             <th>ACTIONS</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //     <Connect 
    //         query={graphqlOperation(query.listSpaces)}
    //         subscription={graphqlOperation(subscriptions.onUpdateSpace)}
    //         onSubscriptionMsg={(prev, { onUpdateSpace }) => {
    //           this.setState({spaces: onUpdateSpace});
    //           console.log('Subscription data:', onUpdateSpace)
    //           return prev; 
    //         }}
    //       >
    //         {
    //           ({data: {listSpaces}, loading, error}) => {
    //             if (error) return (<tr><td colSpan={3}>Error</td></tr>);
    //             if (loading || !listSpaces ) return (<tr><td colSpan={3}>Loading...</td></tr>);
    //             return [].concat(listSpaces.items).sort((a, b) => b.id - a.id).map(this.renderOrEditSpace)
    //           }
    //         }
    //       </Connect>
    //     </tbody>
    // </table>);
  }
}

export default withStyles(s)(SpaceList);

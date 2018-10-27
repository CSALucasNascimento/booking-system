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

import { Button } from 'reactstrap';
import { Analytics, API, graphqlOperation } from "aws-amplify";
import { Connect } from 'aws-amplify-react';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';

class SpaceList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        editing: {}
    }
}

static defaultProps = {
    spaces: [],
    onDelete: () => null,
    onEdit: () => null,
}

handleDelete = (space) => {
    if (window.confirm('Are you sure')) {
        this.props.onDelete(space);
    }
}

handleEdit = (space) => {
    const { editing } = this.state;
    this.setState({ editing: { ...editing, [space.id]: { ...space } } });
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
    console.log(editedSpace)
    const updatedSpace = await API.graphql(graphqlOperation(mutations.updateSpace, { input: editedSpace } ));
    console.log(updatedSpace);
    this.setState({
        editing: { ...others }
    });
}

renderOrEditSpace = (space) => {
    const { editing } = this.state;

    const editData = editing[space.id];
    const isEditing = !!editData;

    return (
        !isEditing ?
            (
                <tr key={space.id}>
                    <td>{space.id}</td>
                    <td>{space.title}</td>
                    <td>{space.description}</td>
                    <td>
                        <button onClick={this.handleEdit.bind(this, space)}>Edit</button>
                        <button onClick={this.handleDelete.bind(this, space)}>Delete</button>
                    </td>
                </tr>
            ) : (
                <tr key={space.id}>
                    <td>
                        {space.id}
                    </td>
                    <td>
                        <input type="text" value={editData.title} onChange={this.handleFieldEdit.bind(this, space.id, 'title')} />
                    </td>
                    <td>
                        <input type="text" value={editData.description} onChange={this.handleFieldEdit.bind(this, space.id, 'description')} />
                    </td>
                    <td>
                        <button onClick={this.handleEditSave.bind(this, space.id)}>Save</button>
                        <button onClick={this.handleEditCancel.bind(this, space.id)}>Cancel</button>
                    </td>
                </tr>
            )
    );
}

render() {
    return (<table width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
        <Connect 
            query={graphqlOperation(queries.listSpaces)}
            subscription={graphqlOperation(subscriptions.onUpdateSpace)}
            onSubscriptionMsg={(prev, { onUpdateSpace }) => {
              console.log('Subscription data:', onUpdateSpace)
              return prev; 
            }}
          >
            {
              ({data: {listSpaces}, loading, error}) => {
                if (error) return (<tr><td colSpan={3}>Error</td></tr>);
                if (loading || !listSpaces ) return (<tr><td colSpan={3}>Loading...</td></tr>);
                return (
                  [].concat(listSpaces.items).sort((a, b) => b.id - a.id).map(this.renderOrEditSpace)
                )
              }
            }
          </Connect>
        </tbody>
    </table>);
  }
}

export default withStyles(s)(SpaceList);

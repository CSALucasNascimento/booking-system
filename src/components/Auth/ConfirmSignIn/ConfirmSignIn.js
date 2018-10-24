/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Auth, Logger } from 'aws-amplify';
import { Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';
import s from './ConfirmSignIn.css';

const logger = new Logger('Confirm Sign In');

class ConfirmSignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.confirmSignIn = this.confirmSignIn.bind(this);
    this.checkContact = this.checkContact.bind(this);
    this.changeState = this.changeState.bind(this);
    this.inputs = {};
    this.state = { error: '' }
  }

  changeState(state, data) {
    const { onStateChange } = this.props;
    if (onStateChange) {
      onStateChange(state, data);
    }
  }

  confirmSignIn() {
    const user = this.props.authData;
    const { code } = this.inputs;
    logger.info('confirm sign in with ' + code);
    const mfaType = user.challengeName === 'SOFTWARE_TOKEN_MFA'
      ? 'SOFTWARE_TOKEN_MFA'
      : null;
    Auth.confirmSignIn(user, code, mfaType)
      .then(() => this.confirmSuccess(user))
      .catch(err => this.confirmError(err));
  }

  confirmSuccess(user) {
    logger.info('confirm sign in success', user);
    this.setState({ error: '' });

    this.checkContact(user);
  }

  confirmError(err) {
    logger.info('confirm sign in error', err);
    this.setState({ error: err.message || err });
  }

  checkContact(user) {
    Auth.verifiedContact(user)
      .then(data => {
        logger.info('verified contacts', data);
        if (!JS.isEmpty(data.verified)) {
          this.changeState('signedIn', user);
        } else {
          user = Object.assign(user, data);
          this.changeState('verifyContact', user);
        }
      })
      .catch(err => {
        logger.info('check verified contact error', err);
      });
  }

  render() {

    const { authState } = this.props;
    if (authState !== 'confirmSignIn') { return null; }
    const { message, error } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Form>

            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Code</Label>
              <Input className={s.input} type="text" placeholder="Code" onChange={event => this.inputs.code = event.target.value} autoFocus />
            </FormGroup>

            <Row>
              <Col>
                <Button className={s.button} onClick={() => this.changeState('signIn')}>
                  Back to sign in
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className={s.button} onClick={this.confirmSignIn}>
                  Confirm
                </Button>
              </Col>
            </Row>
            { error && <Alert color="warning">{error}</Alert> }
          </Form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ConfirmSignIn);
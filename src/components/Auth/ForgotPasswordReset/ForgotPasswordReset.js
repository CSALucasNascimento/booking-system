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
import s from './ForgotPasswordReset.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';

import { Auth, Logger } from 'aws-amplify';
const logger = new Logger('Forgot Password');


class ForgotPasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
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

  submit() {
    const username = this.props.authData;
    if (!username) {
      this.setState({ error: 'missing username' });
      return;
    }

    const { code, password } = this.inputs;
    logger.info('reset password for ' + username);
    Auth.forgotPasswordSubmit(username, code, password)
      .then(data => this.submitSuccess(username, data))
      .catch(err => this.handleError(err));
  }

  submitSuccess(username, data) {
    logger.info('forgot password reset success for ' + username, data);
    this.changeState('signIn', username);
  }

  handleError(err) {
    logger.info('forgot password reset error', err);
    this.setState({ error: err.message || err });
  }

  render() {

    const { authState } = this.props;
    if (authState !== 'forgotPasswordReset') { return null; }
    const { error } = this.state;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Form>
            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Code</Label>
              <Input className={s.input} type="text" placeholder="Code" onChange={event => this.inputs.code = event.target.value} autoFocus />
            </FormGroup>
            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Password</Label>
              <Input className={s.input} type="password" placeholder="Password" onChange={event => this.inputs.password = event.target.value} autoFocus />
            </FormGroup>
            <Row>
              <Col>
                <Button className={s.button} onClick={() => this.changeState('forgotPassword')}>
                  Back to forgot password
                </Button>
              </Col>
            </Row>
            <Button className={s.button} onClick={this.submit}>
            Reset password
            </Button>
            { error && <Alert warning text="left" color="danger">{error}</Alert> }
          </Form>
        </div>
      </div>
    )
  }

}

export default withStyles(s)(ForgotPasswordReset);

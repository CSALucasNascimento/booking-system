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
import s from './SignUp.css';

const logger = new Logger('Sign Up');

class SignUp extends React.Component {
  
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
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

  signUp() {
    const { username, password, email, phone_number } = this.inputs;
    logger.info('sign up with ' + username);
    Auth.signUp(username, password, email, phone_number)
      .then(() => this.signUpSuccess(username))
      .catch(err => this.signUpError(err));
  }

  signUpSuccess(username) {
    logger.info('sign up success with ' + username);
    this.setState({ error: '' });
    this.changeState('confirmSignUp', username);
  }

  signUpError(err) {
    logger.info('sign up error', err);
    let message = err.message || err;
    if (message.startsWith('Invalid phone number')) {
      message = 'Phone numbers must follow these formatting rules: A phone number must start with a plus (+) sign, followed immediately by the country code. A phone number can only contain the + sign and digits. You must remove any other characters from a phone number, such as parentheses, spaces, or dashes (-) before submitting the value to the service. For example, a United States-based phone number must follow this format: +14325551212.'
    }
    this.setState({ error: message });
  }

  render() {

    const { authState } = this.props;
    const { error } = this.state;

    if (authState !== 'signUp') { return null; }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <Form>
            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Username</Label>
              <Input className={s.input} type="text" placeholder="Username" onChange={event => this.inputs.username = event.target.value} autoFocus />
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Password</Label>
              <Input className={s.input} type="password" placeholder="Password" onChange={event => this.inputs.password = event.target.value} autoFocus />
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Email</Label>
              <Input className={s.input} type="email" placeholder="Email address" onChange={event => this.inputs.email = event.target.value} autoFocus />
            </FormGroup>

            <FormGroup className={s.formGroup}>
              <Label className={s.label}>Phone</Label>
              <Input className={s.input} type="tel" placeholder="Phone number" onChange={event => this.inputs.phone_number = event.target.value} autoFocus />
            </FormGroup>

            <Row>
              <Col>
                <Button className={s.button} onClick={() => this.changeState('signIn')}>
                  Back to sign in
                </Button>
              </Col>
              <Col>
                <Button className={s.button} onClick={() => this.changeState('confirmSignUp')}>
                  Confirm a code
                </Button>
              </Col>
            </Row>
            <Button className={s.button} onClick={this.signUp}>
              Create account
            </Button>
            { error && <Alert warning text="left" color="danger">{error}</Alert> }
          </Form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SignUp);
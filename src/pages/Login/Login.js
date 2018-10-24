import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';

import {
  SignIn,
  ConfirmSignIn,
  SignUp,
  ConfirmSignUp,
  ForgotPassword,
  ForgotPasswordReset
} from '../../components/Auth';

const CustomAuthenticator = props => (
  <Authenticator hideDefault>
    <SignIn />
    <ConfirmSignIn />
    <SignUp />
    <ConfirmSignUp />
    <ForgotPassword />
    <ForgotPasswordReset />
  </Authenticator>
)

export default class Login extends Component {
  render() {
    const { user } = this.props;

    return (
        !user ? <CustomAuthenticator />
        : `You are signed in as ${user.username}`
    )
  }
}

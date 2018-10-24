import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';

import { Logger } from 'aws-amplify';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { SignOut } from '../Auth';
import store from '../../store';

const logger = new Logger('Navigation');

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.storeListener = this.storeListener.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { user: null, isOpen: false }
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.storeListener);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  storeListener() {
    logger.info('redux notification');
    const state = store.getState();
    this.setState({ user: state.user });
  }
  
  render() {

    const { user } = this.state;
    
    return (
      <div className={s.root} role="navigation">
        <Navbar expand="md" fixed="top">
          <NavbarBrand href="#">Booking System</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen}>
            <Nav>
              <NavItem>
                <NavLink href="#/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/profile"> 
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/login">
                  Login
                </NavLink>
              </NavItem>
              { user && <SignOut /> }
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);

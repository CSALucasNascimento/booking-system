import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { HashRouter, Route, Switch } from 'react-router-dom';

import s from './Main.css';

import { Container, Row } from 'reactstrap';

import store from '../../store';
import { Header, Feedback, Footer} from '../';

import { SpaceList, SpaceForm, Login, Contact, Admin, NotFound, Privacy } from '../../pages';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.storeListener = this.storeListener.bind(this);
    this.state = { user: null }
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.storeListener);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  storeListener() {
    this.setState({ user: store.getState().user });
  }

  render() {

    const { user } = this.state;

    return (
      <HashRouter>
        <Container fluid className={s.mainContainer}>
          <Header/>
          <Switch>
              <Route exact path="/" render={(props) => <SpaceList />} />
              <Route exact path="/login" render={(props) => <Login user={user} />} />
              <Route exact path="/admin" render={(props) => <Admin />} />
              <Route exact path="/privacy" render={(props) => <Privacy />} />
              <Route exact path="/not-found" render={(props) => <NotFound />} />
              <Route exact path="/contact" render={(props) => <Contact />} />
          </Switch>
          <Feedback />
          <Footer />
        </Container>
      </HashRouter>
    );
  }
}

export default withStyles(s)(Main);

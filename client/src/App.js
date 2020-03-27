import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import ConnectedPlayJeopardy from './components/PlayJeopardy';

const App = () => (
  <Fragment>
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path='/playjeopardy' component={ConnectedPlayJeopardy} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
</Fragment>
)
  

export default App;

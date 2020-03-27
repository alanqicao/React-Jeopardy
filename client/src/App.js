import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import EditCategory from './components/EditCategorys';
import Navbar from './components/Navbar'

const App = () => (
  <Fragment>
    <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/EditCategorys" component={EditCategory} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
</Fragment>
)
  

export default App;

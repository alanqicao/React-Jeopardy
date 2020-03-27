import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
<<<<<<< HEAD
import ConnectedPlayJeopardy from './components/PlayJeopardy';
=======
import EditCategory from './components/EditCategorys';
import Navbar from './components/Navbar'
import CategoryView from './components/CategoryView'
>>>>>>> eb3919c6d8a0b9884dde20d9ce423d630805a7d1

const App = () => (
  <Fragment>
    <Navbar />
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
<<<<<<< HEAD
      <Route exact path='/playjeopardy' component={ConnectedPlayJeopardy} />
=======
      <Route exact path="/EditCategorys" component={EditCategory} />
      <Route exact path="/categorys/:id" component={CategoryView} />
>>>>>>> eb3919c6d8a0b9884dde20d9ce423d630805a7d1
      <Route component={NoMatch} />
    </Switch>
  </Container>
</Fragment>
)
  

export default App;

import React from 'react';
import Layout from './Layout';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

let layoutSelector = (selec, navigation) => <Layout selected={selec} nav={navigation} />

let formSelector = form => {
    return layoutSelector(1, form)
}

let App = props => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/"  exact={true} component={() => formSelector(1) }/>
          <Route path="/home" component={() => layoutSelector(2) } />
          <Route path="/user" component={() => layoutSelector(3) } />
        </Switch>
      </BrowserRouter>
    )
}

export default App;

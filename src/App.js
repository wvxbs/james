import React from 'react';
import Layout from './Layout';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Form from './Layout/content/Form'

const layoutSelector = (selec, navigation) => <Layout selected={selec} nav={navigation} />


const formSelector = form => <Form nav={form}/>

const App = (props) => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/"  exact={true} component={() => formSelector(1) }/>
          <Route path="/signIn" component={() => formSelector(2) }/>        
          <Route path="/home" component={() => layoutSelector(2) } />
          <Route path="/user" component={() => layoutSelector(3) } />
        </Switch>
      </BrowserRouter>
    )
}

export default App;

import React from 'react';
import Layout from './Layout';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Form from './Layout/content/Form'

class App extends React.Component {
  layoutSelector = (selec, navigation) => <Layout selected={selec} nav={navigation} cookies={this.props.cookies} />


  formSelector = (form, props) => <Form nav={form}/>

  render() {  
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/"  exact={true} component={() => this.formSelector(1) }/>
          <Route path="/signIn" component={() => this.formSelector(2) }/>        
          <Route path="/home" component={() => this.layoutSelector(2) } />
          <Route path="/user" component={() => this.layoutSelector(3) } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

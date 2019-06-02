import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

let App = props => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={}/>
          <Route path="/homr" component={}/>
          <Route path="/" component={}/>
          <Route path="/" component={}/>
        </Switch>
      </BrowserRouter>
      <div>
        <Layout />
      </div>
    )
}

export default App;

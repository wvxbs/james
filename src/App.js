import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import axios from 'axios'
import {BrowserRouter, Link} from 'react-router-dom'

let App = props => {
    return (
      <div>
        <Layout />
      </div>
    )
}

export default App;

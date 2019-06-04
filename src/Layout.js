import React from 'react'
import Header from './Layout/Header';
import Content from './Layout/Content';

let Layout = props =>{
    return (
        <div >
            <Header />
            <div className="blank"></div>
            <div className="container is-fluid">
               <Content select={props.selected} nav={props.nav} />
            </div>
        </div>
    )
}

export default Layout
import React from 'react'
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer'

const Layout = props =>{
    return (
        <div >
            <Header />
            <div className="blank"></div>
            <div className="container is-fluid">
               <Content select={props.selected} nav={props.nav} />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
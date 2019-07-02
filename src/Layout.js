import React, {useEffect, useState} from 'react'
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer'
import { Redirect} from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Layout = props =>{

    const [redirect, setRedirect] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    useEffect(() => {
        if(cookies.usr == null) {
            setRedirect(true)
        } else {
            setRedirect(false)
        }
    })

    if(redirect) {
        return <Redirect to="/" />
    } else {
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
}

export default Layout
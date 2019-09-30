    import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './../ico.png'
import {useCookies, Cookies} from 'react-cookie'

const Header = props => {

    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        if(cookies.usr == null ) {
            setName('')
        } else {
        setName(cookies.usr.username)
        }
    })

    return(
        <div className="navbar is-black is-fixed-top">
            <div className="navbar-brand">
                <span className="navbar-title">James</span>
                <img src={Icon} />
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/user">
                            <button className="button is-white">
                                {name}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
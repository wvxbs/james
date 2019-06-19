import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './../ico.png'

const Header = props => {
    return(
        <div className="navbar is-white is-fixed-top">
            <div className="navbar-brand">
                <span className="navbar-title">James</span>
                <img src={Icon} />
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Link to="/user">
                            <button className="button is-white">
                                Perfil
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
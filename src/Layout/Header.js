import React from 'react'
import Icon from './../ico.png'

let Header = props => {
    return(
        <div className="navbar is-white is-fixed-top">
            <div className="navbar-brand">
                <span className="navbar-title">James</span>
                <img src={Icon} />
            </div>
        </div>
    )
}

export default Header
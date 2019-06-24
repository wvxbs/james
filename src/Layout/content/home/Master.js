import React, {useState, useEffect} from 'react'
import Sections from './master/Sections'
import {useCookies} from 'react-cookie'

const Master = props => {
    const [name, setName] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    useEffect(()=> {
        if(cookies.usr == null ) {
            setName('')
        } else {
            setName(cookies.usr.firstname)
        }
    })

    return (
        <div className="sidebar">
            <div className="has-text-right">
                <div>
                    <h1 className="subtitle">Bem Vindo {name}</h1>
                </div>
                <Sections />
            </div>
        </div>
    )
}

export default Master   
import React, {useState, useEffect} from 'react'
import { Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import Data from './../../../data'

const logIn = props => {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [redirect, setRedirect] = useState(true)
    const [data, setData] = useState(null)
    const [response, setResponse] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    useEffect(() =>{
        if(cookies.usr == null) {
            setRedirect(false)
        } else {
            setRedirect(true)
        }
    })

    const submitData = (_userName, _password) => {
        var request = JSON.stringify({
            'username' : _userName,
            'password' : _password
        })

        setResponse(Data(1, request))
        if (response != null) {
            if(response.state == true) {
                setCookie('use', response.data)
            }
        } 
        
        console.log(redirect)
        console.log(JSON.stringify(data))
    }

    if(redirect){
        return <Redirect to="/home" />

    } else {
        return(
            <div>
                <div className="has-text-centered">
                    <h1 className="title" id="lTitle" >Bem Vindx ao James!</h1>  
                </div>
                <div className="form-container card">
                    <div className="field">
                        <label className="label">User Name</label>
                        <div className="control">
                            <input className="input is-rounded" type="text" placeholder="" onChange={userName => setUserName(userName.target.value) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Senha</label>
                        <div className="control">
                            <input className="input is-rounded" type="password" placeholder="" onChange={password => setPassword(password.target.value)} />
                        </div>
                    </div>
                    <button className="button is-link" onClick={() => submitData(userName, password)}>
                        Entrar
                    </button>
                </div>
                <div className="has-text-centered">
                        <p>ou</p>
                        <Link to="signIn">
                            <p>
                                Cadastre-se
                            </p>
                        </Link>
                    </div>
                </div>
        )
    }
}

export default logIn
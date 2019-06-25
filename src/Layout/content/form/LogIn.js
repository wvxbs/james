import React, {useState, useEffect} from 'react'
import { Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import {useCookies} from 'react-cookie'

const logIn = props => {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [data, setData] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    useEffect(() =>{
        if(cookies.usr == null) {
            setRedirect(false)
        } else {
            setRedirect(true)
        }
    })

    const submitData = (userName, password) => {

        var request = JSON.stringify({
            'username' : userName,
            'password' : password
        })
    
        axios({
            method : 'POST',
            url : 'http://james/api/user/login.php',
            data : request
        }).then(res => {
            var response = JSON.stringify(res.data)
            setData(response)
            setCookie('usr', response)
            setRedirect(true)
        }).catch(err =>{
            setRedirect(false)
        })
    
        console.log(redirect)
        console.log(JSON.stringify(data))
    }

    if(redirect){
        return <Redirect to="/home" />

    } else {
        return(
            <div>
                <div className="has-text-centered">
                    <h1 className="title" id="lTitle" >Bem Vindo ao James!</h1>  
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
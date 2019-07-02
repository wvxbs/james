import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const SignIn = props => {

    const [data, setData] = useState(null)
    const [userName, setUserName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [cookies, setCookie , removeCookie] = useCookies(null)

    useEffect(() =>{
        if(cookies.usr == null) {
            setRedirect(false)
        } else {
            setRedirect(true)
        }
    })

    const submitData = (userName, firstName, lastName, email, password) => {

        var request = JSON.stringify({
                "username": userName,
                "firstname": firstName,
                "lastname": lastName,
                "email": email,
                "password": password
            })

        var logIn = JSON.stringify({
            "username" : userName,
            "password" : password
        })
    
        axios({
            method : 'POST',
            url : 'http://james/api/user/create.php',
            data : request
        }).then(res => {
            axios({
                method : 'POST',
                url : 'http://james/api/user/login.php',
                data : logIn
            }).then(res => {
                var response = JSON.stringify(res.data)
                setData(response)
                setCookie('usr', response)
                setRedirect(true)
            }).catch(err =>{
                setRedirect(false)
            })
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
                    <h1 className="title" id="lTitle">Bem Vindx ao James!</h1>  
                </div>
                <div className="form-container card">
                    <div className="field">
                        <label className="label">User Name</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={usr => setUserName(usr.target.value) } 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={fname => setFirstName(fname.target.value) } 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={fname => setLastName(fname.target.value) } 
                            />
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={email => setEmail(email.target.value) } 
                                />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Senha</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="password" 
                                placeholder="" 
                                onChange={password => setPassword(password.target.value)} 
                            />
                        </div>
                    </div>
                    <button 
                        className="button is-link" 
                        onClick={() => submitData(userName, firstName, lastName, email, password)}
                    >
                        Entrar
                    </button>
                </div>
            </div>
            </div>
        )
    }
}

export default SignIn
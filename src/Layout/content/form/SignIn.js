import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom'

const submitData = (userName, fullName, email, password) => {
        
    //post
    var request = JSON.stringify({
        'userName' : userName,
        'fullName' : fullName,
        'email' : email,
        'password' : password
    })

    return true
}

const logIn = props => {

    const [userName, setUserName] = useState('none')
    const [firstName, setFirstName] = useState('none')
    const [email, setEmail] = useState('none')
    const [password, setPassword] = useState('none')
    const [redirect, setRedirect] = useState(false)

    if(redirect){
        return <Redirect to="/home" />

    } else {
        return(
            <div>
                <div className="has-text-centered">
                    <h1 className="title">Bem Vindx ao James!</h1>  
                </div>
                <div className="form-container card">
                    <div className="field">
                        <label className="label">User Name</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={usr => 
                                setUserName(usr.target.value) } 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Full Name</label>
                        <div className="control">
                            <input 
                                className="input is-rounded" 
                                type="text" 
                                placeholder="" 
                                onChange={fname => 
                                setFirstName(fname.target.value) } 
                            />
                        </div>
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
                                onChange={password => 
                                setPassword(password.target.value)} 
                            />
                        </div>
                    </div>
                    <button 
                        className="button is-primary" 
                        onClick={() => setRedirect(submitData(email, password))}
                    >
                        Entrar
                    </button>
                </div>
            </div>
        )
    }
}

export default logIn
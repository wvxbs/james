import React, {useState, useEffect} from 'react'
import { Redirect, Link} from 'react-router-dom'
import { createStore }  from 'redux'

const logIn = props => {

    const [email, setEmail] = useState('none')
    const [password, setPassword] = useState('none')
    const [redirect, setRedirect] = useState(false)


    const submitData = (email, password) => {

        //post
        var request = JSON.stringify({
            'email' : email,
            'password' : password
        })

        console.log(request)
        setRedirect(true)
    }

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
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input is-rounded" type="text" placeholder="" onChange={email => setEmail(email.target.value) } />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Senha</label>
                        <div className="control">
                            <input className="input is-rounded" type="password" placeholder="" onChange={password => setPassword(password.target.value)} />
                        </div>
                    </div>
                    <button className="button is-primary" onClick={() => submitData(email, password)}>
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
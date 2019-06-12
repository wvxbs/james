import React, {useState, useEffect} from 'react'

const LogIn = props => {
    const [formData, setFormData] = useState('')

    const submitData = () => {
        dataHandler()
        console.log(formData)
    }

    const dataHandler = (creds) => {
        if(creds != 'error') {
            setFormData(JSON.stringify(creds))
        } else {
            setFormData('error')
        }

    }

    const retrieveFormData = (cred) => {
        var key = Object.keys(cred)
        var email = ''
        var password = ''
        var Array

        if(key == "email") {
            console.log(key)
            email = key

        } else if(key == "password") {
            console.log(key)
            password = key

        } else {
            console.log('error while authenticating')
        }

        Array = [{"email" : email, "password" : password}]

        if(Array != null){
            return Array
        } else {
            return 'error'
        }

    }

    return(
        <div>
            <div className="has-text-centered">
                <h1 className="title">Bem Vindx ao James!</h1>  
            </div>
            <div className="form-container card">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="" onChange={(email) => retrieveFormData({"email":email})} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="" onChange={(password) => retrieveFormData({"password":password})} />
                    </div>
                </div>
                <button className="button is-primary" onClick={() => submitData()}>
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default LogIn
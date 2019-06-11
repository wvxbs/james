import React from 'react'

const LogIn = props => {
    return(
        <div>
            <div className="has-text-centered">
                <h1 className="title">Bem Vindx ao James!</h1>  
            </div>
            <div className="form-container card">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input is-rounded" type="text" placeholder="" />
                    </div>
                </div>
                <button className="button is-primary">
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default LogIn
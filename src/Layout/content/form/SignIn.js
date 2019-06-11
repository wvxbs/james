import React from 'react'

const SignIn = props => {
    return(
        <div>
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
                Cadastras
            </button>
        </div>
    )
}

export default SignIn
import React,{useState, useEffect}  from 'react'

const SignIn = props => {
    const [formData, setFormData] = useState([])

    return(
        <div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input is-rounded" type="text" placeholder=""  />
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input is-rounded" type="text" placeholder="" />
                </div>
            </div>
            <button className="button is-primary">
                Cadastrar
            </button>
        </div>
    )
}

export default SignIn
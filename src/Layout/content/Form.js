import React from 'react'
import LogIn from './form/LogIn'
import SignIn from './form/SignIn'
import Error from './../../components/Error'

const Select = props =>{
    var selected = props.selected
    switch(selected){
        case 1:
            return <LogIn />
        break
        case 2:
            return <SignIn />
        break
        default: 
            return <Error />
    }
}

const Form = props =>{
    return(
        <div className="container">
            <Select selected={props.nav}/>
            
        </div>
    )
}

export default Form
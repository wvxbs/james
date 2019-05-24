import React from 'react'
import LogIn from './form/LogIn'
import SignIn from './form/SignIn'
import Error from './../../components/Error'

let Select = props =>{
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

let Form = props =>{
    return(
        <div className="container">
            <Select selected={1}/>
        </div>
    )
}

export default Form
import React from 'react'
import Form from './content/Form'
import Home from './content/Home'
import User from './content/User'
import Error from './../components/Error'

let Select = props => {
    switch(props.selection){
        case 1:
            return <Form />
        break
        case 2:
            return <Home />
        break
        case 3:
            return <User />
        break
        default:
            return <Error />
        
    }

}

let Content = props => {
    return (
        <Select selection={props.select} />
    )

}

export default Content
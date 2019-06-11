import React from 'react'
import Form from './content/Form'
import Home from './content/Home'
import User from './content/User'
import Error from './../components/Error'

const Select = props => {
    switch(props.selection){
        case 1:
            return <Form nav={props.nav} />
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

const Content = props => {
    return (
        <Select selection={props.select} nav={props.nav} />
    )

}

export default Content
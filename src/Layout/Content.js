import React from 'react'
import Form from './content/Form'
import Home from './content/Home'
import Error from './../components/Error'

let Select = props => {
    var selected = props.selected

    switch(selected){
        case 1:
            return <Form />
        break
        case 2:
            return <Home />
        break
        default:
            return <Error />
        
    }

}

let Content = props => {
    return <Select selected={1} />

}

export default Content
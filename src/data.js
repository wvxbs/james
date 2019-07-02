import React from 'react'
import logIn from './data/logIn'

const Data = (selector, request) => {
    var response = null

    switch(selector){
        case 1:
            response = logIn(request)
        break
        default : 
            alert('bad request')
        break
    }
    console.log(response)
    return response

}

export default Data
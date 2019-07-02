import React from 'react'
import axios from 'axios'
import {useCookies } from 'react-cookie'

const logIn = (request) => {
    var data = null
    console.log(request)

    axios({
        method : 'POST',
        crossOrigin : true,
        url : 'http://james/api/user/login.php',
        data : request
    }).then(res => {

        var response = res.data
        console.log(JSON.stringify(res.headers))

        data = {
            state : true,
            data : response
        }

        return JSON.stringify(data)
    }).catch(err =>{
        return data
    })
}

export default logIn
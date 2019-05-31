import React, { useState, useEffect } from 'react'
import Video from '../../../components/Video'
import axios from 'axios'

const [data, setData] = useState(0)

let Data = () => {
    data.map(
        <Video 
            title={data.employee_name}
            desc={data.employee_salary}
        />
    )
}

let Detail = props => {
    useEffect(() => {
       axios('http://dummy.restapiexample.com/api/v1/employees').then(res => {
          setData(res.data)
        })
    })

    return (
        <div>
            <h1 className="title">Destaques:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {Data}
                </div>
            </div>
        </div>
    )
}
export default Detail
import React, { useState, useEffect } from 'react'
import Video from '../../../components/Video'
import axios from 'axios';

let Detail = props => {

    const [data, setData] = useState({videos : []})

    useEffect(() => {
        const result = axios(
            'http://dummy.restapiexample.com/api/v1/employees',
            )
        setData(result.data)
    })

    return (
        <div>
            <h1 className="title">Destaques:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    <Video title="Maia" desc="homem barbudo e peludo roubando idosa"/>
                </div>
            </div>
        </div>
    )
}
export default Detail
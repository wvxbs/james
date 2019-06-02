import React, { useState, useEffect } from 'react'
import Video from '../../../components/Video'
import axios from 'axios'

let Detail = props => {

    const [data, setData] = useState('video')

    useEffect(() => {
        axios('http://dummy.restapiexample.com/api/v1/employees').then(res => {
            setData(res.data)
        })

    });

    var videos = data

    return (
        <div>
            <h1 className="title">Destaques:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {videos.map(video => <Video key={video.id}/>)}
                </div>
            </div>
        </div>
    )
}
export default Detail
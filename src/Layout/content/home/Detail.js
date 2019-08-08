import React, { useState, useEffect } from 'react'
import Videos from './../../../components/Videos'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const Detail = props => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios({
            url : 'http://james/api/video/read.php',
            method : 'GET'
        }).then(res => {
            setVideos(res.data)
        })
    })

    return (
        <div>
            <h1 className="title">Videos:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    <Videos responde="error" />
                </div>
            </div>
        </div>
    )
}
export default Detail
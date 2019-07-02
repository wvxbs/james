import React, { useState, useEffect, useDebugValue } from 'react'
import Video from '../../../components/Video'
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

    const Videos = () => {
        videos.map(video =>{
            return (
                <Video 
                    key={video.id} 
                    id={video.id} 
                    title={video.title} 
                    thumb={video.thumbnailPhoto}
                    video={video.path}
                    likes={video.likes}
                    dislikes={video.dislikes}
                    views={video.views}
                    user={video.user.username}
                />
            )
        })
    }

    return (
        <div>
            <h1 className="title">Videos:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {Videos}
                </div>
            </div>
        </div>
    )
}
export default Detail
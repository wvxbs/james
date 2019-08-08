import React, {useEffect, useState} from 'react'
import Video from './videos/Video'

const Videos = props => {
    const [videos, setVideos] = useState([{
        id : '',
        title : 'error',
        thumb : '',
        thumbnailPhoto : '',
        path : '',
        likes : 0,
        dislikes : 0,
        views : 0,
        user : 'nnn'
    }])

    useEffect(()=>{
        if(props.response !== 'error') {
            setVideos(props.response)
        }
    })

    const Builder = videos.map(video =>{
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

    return(
        <div>
            {Builder}
        </div>
    )
}

export default Videos
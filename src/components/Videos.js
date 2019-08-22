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

    const Error = props => {
        return(
            <div style={{margin : 'auto', justifyContent : 'center'}}>
                <h1 className="subtitle">Não Há videos para mostrar :(</h1>
            </div>
        )
    }

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

    if(props.response !== 'error'){
        return(
            <div>
                {Builder}
            </div>
        )
    }
    else {
        return <Error />
    }
}

export default Videos
import React, {useState, useEffect} from 'react'
import Video from './../../../components/Videos'


const Uploads = props => {
    const videoContent = [
        {
            'id' : '1',
            'title': 'Maia',
            'uri' : '',
            'description' : 'homem barbudo roubando idosa'
        },
        {
            'id' : '2',
            'title': 'Moio',
            'uri' : '',
            'description' : 'homem barbudão roubando idosa'
        },
        {
            'id' : '3',
            'title': 'Mainha Muito Safado',
            'uri' : '',
            'description' : 'homem barbudo roubando nutella'
        }
    ]

    const Videos = (videos) => {
        videos.map(video =>{
            return(
                <Video 
                    thumb={video.uri}
                    id={video.id}
                    title={video.title}
                    desc={video.description}
                />
            )
        })
    }

    return (
        <div>
            <h1 className="title">Seus Envios:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {Videos(videoContent)}
                </div>
            </div>
        </div>
    )
}

export default Uploads
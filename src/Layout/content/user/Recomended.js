import React, {useState, useEffect} from 'react'
import Video from './../../../components/Video'


const Recomended = props => {
    const videoContent = [
        {
            'id' : '1',
            'title': 'Maia',
            'description' : 'homem barbudo roubando idosa'
        },
        {
            'id' : '2',
            'title': 'Moio',
            'description' : 'homem barbudão roubando idosa'
        },
        {
            'id' : '3',
            'title': 'Mainha Muito Safado',
            'description' : 'homem barbudo roubando nutella'
        }
    ]
    
    const Videos = videoContent.map(video =>{
            return (
                <Video 
                    key={video.id} 
                    id={video.id} 
                    title={video.title} 
                    desc={video.description}
                />
            )
        })

    return (
        <div>
            <h1 className="title">Recomendados:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {Videos}
                </div>
            </div>
        </div>
    )
}

export default Recomended
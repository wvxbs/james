import React, {useState, useEffect} from 'react'
import Videos from './../../../components/Videos'


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
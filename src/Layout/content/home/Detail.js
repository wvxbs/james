import React, { useState, useEffect } from 'react'
import Video from '../../../components/Video'
import axios from 'axios'
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
    },
    {
        'id':'4',
        'title':'Claudemir é pego bebendo coca cola',
        'description':'vai tmnc ferreiraa'
    },
    {
        'id':'5',
        'title':'Top 5 acidentes de trabalho',
        'description':'Confira os melhores e mais chocantes acidentes de trabalho'
    },
    {
        id: 6,
        title: 'Pau entra errado no Maia :o',
        description: 'Maia acha que entra errado, mas quem põe erra mesmo.'
    },
    {
        id: 7,
        title: 'Ferreira fodido devagarinho por uma furry trap do sonic',
        description: 'Ferreira fodido devagarinho por uma furry trap do sonic'
    },
    {
        id:8,
        title:'feerrerinha safadinho com ovo na boca',
        description:'comi o cu de quem ta lendo kkkkkk'
    },
    {
        id:9,
        title:'enfiei um hidrante no cu, deu ruim? XD XD :O',
        description:'sou corno  '
    }
]

const Detail = props => {

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
            <h1 className="title">Destaques:</h1>
            <div className="video-container-wrapper">
                <div className="video-container">
                    {Videos}
                </div>
            </div>
        </div>
    )
}
export default Detail
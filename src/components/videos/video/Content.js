import React, { useState, useEffect } from 'react'

    const Content = props => {

        const [title, setTitle] = useState("Título")
        const [desc, setDesc] = useState("Descrição")
        const [selected, setSelected] = useState('')
        const [likes, setLikes] = useState(0)
        const [dislikes, setDislikes] = useState(0)
        const [views, setViews] = useState(0)
        const [enabled, setEnabled] = useState(true)

        useEffect(()=>{
            if(props.enabled !== undefined){
                setEnabled(props.enabled)
            }

            if(props.title!=undefined && props.title!='') {
                setTitle(props.title)
            }

            if(props.desc!=undefined&& props.desc!='') {
                setDesc(props.desc)
            }
        })

        const Disliker = (selected) => {
            if(selected != '' && selected != undefined){
                if(selected == 'like'){
                    setLikes(1)
                    setDislikes(0)
                } else 
                if(selected = 'dislike'){
                    setDislikes(1)
                    setLikes(0)
                }
            }
        }

        return(
            <div className="card-content">
                <h1 className="title">
                    {title}
                </h1>
                <h1 className="subtitle">
                    {desc}
                </h1>
                <div className="level">
                    <a 
                        className="level-item has-text-centered" 
                        onClick={() => {Disliker('like')}}
                    >
                        <div>
                        <p className="videosub heading has-text-weight-bold"><span className="fas fa-thumbs-up"></span></p>
                        <p className="subtitle">{likes}</p>
                        </div>
                    </a>
                    <a 
                        className="level-item has-text-centered" 
                        onClick={() => {Disliker('dislike')}}
                    >
                        <div>
                        <p className="videosub heading has-text-weight-bold"><span className="fas fa-thumbs-down"></span></p>
                        <p className="subtitle">{dislikes}</p>
                        </div>
                    </a>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="videosub heading has-text-weight-bold"><span className="fas fa-eye"></span></p>
                        <p className="subtitle">{views}</p>
                        </div>
                    </div>
                    <a className="level-item has-text-centered">
                        <div>
                        <p className="videosub heading has-text-weight-bold"><span className="fas fa-user"></span></p>
                        <p className="subtitle">{props.user}</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }   

export default Content
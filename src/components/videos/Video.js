import React from 'react'
import Img from './video/Img';
import Content from './video/Content';

const Video = props => {
    var video = "http://james/" + props.thumb
    return (
            <div className="card video">
                <Img src={video} />
                <Content id={props.id} title={props.title} desc={props.desc}/>
            </div>
    )
}

export default Video
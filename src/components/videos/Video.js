import React from 'react'
import Img from './video/Img';
import Content from './video/Content';

const Video = props => {
    return (
            <div className="card video">
                <Img src={props.thumb} />
                <Content id={props.id} title={props.title} desc={props.desc}/>
            </div>
    )
}

export default Video
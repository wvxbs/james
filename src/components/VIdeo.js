import React from 'react'
import Img from './video/Img';
import Content from './video/Content';

let Video = props => {
    return (
            <div className="card video">
                <Img />
                <Content id={props.id} title={props.title} desc={props.desc}/>
            </div>
    )
}

export default Video
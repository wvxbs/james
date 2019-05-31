import React from 'react'
import Img from './video/Img';
import Content from './video/Content';

let Video = props => {
    return (
            <div className="card video">
                <Img />
                <Content />
            </div>
    )
}

export default Video
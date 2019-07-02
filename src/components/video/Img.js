import React from 'react'

const Img = props => {
    return(
    <div className="card-image">
        <div className="image is-4by3">
        <img src={props.src} alt="thumb " />
        </div>
    </div>
    )
}

export default Img
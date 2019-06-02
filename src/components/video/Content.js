import React from 'react'

let Content = props => {
    return(
        <div className="card-content">
            <h1 className="title">
                {props.title}
            </h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default Content
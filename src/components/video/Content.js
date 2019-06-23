import React from 'react'

const Content = props => {
    return(
        <div className="card-content">
            <h1 className="title">
                {props.title}
            </h1>
            <p>{props.desc}</p>
            <p>{props.id}</p>
            <p>props.user</p>
            <p>{props.views}</p>
            <p>{props.likes}</p>
            <p>{props.deslikes}</p>
        </div>
    )
}

export default Content
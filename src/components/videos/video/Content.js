import React from 'react'

const Content = props => {
    return(
        <div className="card-content">
            <h1 className="title">
                {props.title}
            </h1>
            <h1 className="subtitle">
                {props.desc}
            </h1>
            <div className="level">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="videosub heading has-text-weight-bold"><span className="fas fa-thumbs-up"></span></p>
                    <p className="subtitle">{props.likes}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="videosub heading has-text-weight-bold"><span className="fas fa-thumbs-down"></span></p>
                    <p className="subtitle">{props.deslikes}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="videosub heading has-text-weight-bold"><span className="fas fa-eye"></span></p>
                    <p className="subtitle">{props.views}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="videosub heading has-text-weight-bold"><span className="fas fa-user"></span></p>
                    <p className="subtitle">{props.user}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
import React from 'react'

const Content = props => {
    return(
        <div className="card-content">
            <h1 className="title">
                {props.title}
            </h1>
            <div className="level">
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading has-text-weight-bold"><span className="fas fa-thumbs-up"></span></p>
                    <p className="subtitle">3,456</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading has-text-weight-bold"><span className="fas fa-thumbs-down"></span></p>
                    <p className="subtitle">123</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading has-text-weight-bold"><span className="fas fa-eye"></span></p>
                    <p className="subtitle">456K</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                    <p className="heading has-text-weight-bold"><span className="fas fa-user"></span></p>
                    <p className="subtitle">789</p>
                    </div>
                </div>
            </div>
            <p>{props.user}</p>
            <p>{props.views}</p>
            <p>{props.likes}</p>
            <p>{props.deslikes}</p>
        </div>
    )
}

export default Content
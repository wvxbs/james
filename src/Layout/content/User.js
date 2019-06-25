import React from 'react';
import MainInfo from './user/MainInfo'
import Recomended from './user/Recomended';
import Upload from './user/Upload'

const User = props => {
    return(
        <div className="columns">
            <div className="column is-one-third">
                <MainInfo />
            </div>
            <div className="column">
                <Upload />
                <Recomended />
            </div>
        </div>
    )
}

export default User
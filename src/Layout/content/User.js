import React from 'react';
import MainInfo from './user/MainInfo'
import Uploads from './user/Uploads';
import Upload from './user/Upload'

const User = props => {
    return(
        <div className="columns">
            <div className="column is-one-third">
                <MainInfo />
            </div>
            <div className="column">
                <Upload />
                <Uploads usr="1" />
            </div>
        </div>
    )
}

export default User
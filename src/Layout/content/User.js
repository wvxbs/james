import React from 'react';
import MainInfo from './user/MainInfo'
import Recomended from './user/Recomended';

const User = props => {
    return(
        <div className="columns">
            <div className="column is-one-third">
                <MainInfo />
            </div>
            <div className="column">
                <Recomended />
            </div>
        </div>
    )
}

export default User
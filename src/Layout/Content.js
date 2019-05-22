import React from 'react'
import Master from './content/Master'
import Detail from './content/Detail'

let Content = props => {
    return (
        <div className="columns">
            <div className="column">
                <Master />
            </div>
            <div className="column is-one-quarter">
                <Detail />                    
            </div>
        </div>
    )
}

export default Content
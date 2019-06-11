import React from 'react'
import Detail from './home/Detail'
import Master from './home/Master'

const Home = props => {
    return (
        <div className="columns">
            <div className="column">
                <Detail />
            </div>
            <div className="column is-one-quarter">
                <Master />                    
            </div>
        </div>
    )
}

export default Home
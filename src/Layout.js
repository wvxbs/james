import React from 'react'
import Header from './Layout/Header';
import Master from './Layout/Master';
import Detail from './Layout/Detail';

let Layout = props =>{
    return (
        <div>
            <Header />
            <div className="blank"></div>
            <div>
                <Master />
                <Detail />
            </div>
        </div>
    )
}

export default Layout
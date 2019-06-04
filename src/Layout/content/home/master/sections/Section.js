import React from 'react';
import List from './List';

let Section = props => {
    const secItems = [{
        'link1': [{
            title : 'Maia Pelado',
            nav : 1 
        }],
        'link2' : [{
            title : 'Maia Peladinho',
            nav : 2
        }],
        'link3' : [{
            title : 'Gatinho Lindo',
            nav : 3 
        }]
    }]

    const listItems = Object.keys(secItems).map((item, i) => <List key={i} title={item.title} nav={item.nav} />)

    return(
        <div>
            <h1 className="title">
                {props.SecTitle}
            </h1>
            <div className="is-flex">
                {listItems}
            </div>
        </div>
    )
}

export default Section 

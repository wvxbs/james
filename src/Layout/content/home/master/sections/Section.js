import React from 'react';
import List from './List';

let Section = props => {
    const secItems = ['OOF', 'NOOF', 'WOFF']

    const listItems = secItems.map((item, i) => <List key={i} title={item} nav={i} />)

    return(
        <div>
            <h1 className="title">
                {props.SecTitle}
            </h1>
            <div>
                {listItems}
            </div>
        </div>
    )
}

export default Section 
